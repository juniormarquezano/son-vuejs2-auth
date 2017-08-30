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

/*
const state = {
    view: 'tabela',
    times: [
        new Time('América Mineiro', require('./assets/america_mg_60x60.png')),
        new Time('Atlético Paranaense', require('./assets/atletico-pr_60x60.png')),
        new Time('Atlético Mineiro', require('./assets/atletico_mg_60x60.png')),
        new Time('Botafogo', require('./assets/botafogo_60x60.png')),
        new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
        new Time('Corinthians', require('./assets/corinthians_60x60.png')),
        new Time('Coritiba', require('./assets/coritiba_60x60.png')),
        new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Time('Figueirense', require('./assets/figueirense_60x60.png')),
        new Time('Flamengo', require('./assets/flamengo_60x60.png')),
        new Time('Fluminense', require('./assets/fluminense_60x60.png')),
        new Time('Grêmio', require('./assets/gremio_60x60.png')),
        new Time('Internacional', require('./assets/internacional_60x60.png')),
        new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
        new Time('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
        new Time('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
        new Time('Santos', require('./assets/santos_60x60.png')),
        new Time('Sport', require('./assets/sport_60x60.png')),
        new Time('Vitória', require('./assets/vitoria_60x60.png')),
    ],
};

export default new Vuex.Store({
    state
})
*/

/* exemplo Laracasts */
export const store = new Vuex.Store({
    state: {
        view: 'tabela',
        times: [],
        /*
        times: [
            new Time(1, 'América Mineiro', require('./assets/america_mg_60x60.png')),
            new Time(2, 'Atlético Paranaense', require('./assets/atletico-pr_60x60.png')), //
            new Time(3, 'Atlético Mineiro', require('./assets/atletico_mg_60x60.png')), //
            new Time(4, 'Botafogo', require('./assets/botafogo_60x60.png')), //
            new Time(5, 'Chapecoense', require('./assets/chapecoense_60x60.png')), //
            new Time(6, 'Corinthians', require('./assets/corinthians_60x60.png')), //
            new Time(7, 'Coritiba', require('./assets/coritiba_60x60.png')),
            new Time(8, 'Cruzeiro', require('./assets/cruzeiro_60x60.png')),
            new Time(9, 'Figueirense', require('./assets/figueirense_60x60.png')),
            new Time(10, 'Flamengo', require('./assets/flamengo_60x60.png')), //
            new Time(11, 'Fluminense', require('./assets/fluminense_60x60.png')), //
            new Time(12, 'Grêmio', require('./assets/gremio_60x60.png')), //
            new Time(13, 'Internacional', require('./assets/internacional_60x60.png')),
            new Time(14, 'Palmeiras', require('./assets/palmeiras_60x60.png')), //
            new Time(15, 'Ponte Preta', require('./assets/ponte_preta_60x60.png')), //
            new Time(16, 'Santa Cruz', require('./assets/santa_cruz_60x60.png')),
            new Time(17, 'Santos', require('./assets/santos_60x60.png')), //
            new Time(18, 'Sport', require('./assets/sport_60x60.png')),
            new Time(19, 'São Paulo', require('./assets/sao_paulo_60x60.png')), //
            new Time(20, 'Vitória', require('./assets/vitoria_60x60.png')),
        ],
        */
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
        'show-time-list'(state){
            state.view = 'tabela';
        },
        'show-time-novojogo'(state){
            state.view = 'novojogo';
        },
    },
    actions: {
        'load-times'(context) {
            Vue.http.get('http://localhost:8000/api/times').then(response => {
                let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
                context.commit('set-times', times);
            })
        },
    }
});
