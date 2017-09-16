import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './Time';
import JwtToken from './services/jwt-token';

Vue.use(Vuex);

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
        // Executa a ação ajax para consumir os dados da api e retornar a lista de times
        'load-times'(context) {
            Vue.http.get('http://vuejs2-auth.app/api/times').then(response => {
                let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
                context.commit('set-times', times);// faz o commit para passar os times para o set-times
            });
        },
        login(context, {email, password}) {
            JwtToken.accessToken(email, password);
        }
    }
});
