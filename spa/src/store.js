import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './Time';
import VueResource from 'vue-resource';

Vue.use(Vuex);
// Somente importar o Vuex, não é garantia do seu funcionamento correto.
// O motivo é que não sabemos se ele está sendo carregado, antes ou depois, do Vue.
// Por isso, utilizamos o use para fazer a integração com o Vue.
// O mesmo serve para qualquer plugin ou biblioteca que você quiser integrar.
Vue.use(VueResource);

/* exemplo Laracasts */
export const store = new Vuex.Store({
    state: {
        times: [], // array que recebe os times vindo da mutation set-times
    },
    getters: {
        timesLibertadores: state => state.times.slice(0,6),
        timesRebaixados: state => state.times.slice(15,20)
    },
    mutations: {
        'set-times'(state, times) {
            state.times = times;
        },
        update(state, time){
            let index = state.times.findIndex(element => time.id === element.id);
            if(index !== -1){
                state.times[index] = time;
            }
        },
    },
    actions: {
        // Executa a ação ajax para consumir os dados da api
        'load-times'(context) {
            Vue.http.get('http://localhost:8000/api/times').then(response => {
                let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
                context.commit('set-times', times);// faz o commit para passar os times para o set-times
            })
        },
    }
});
