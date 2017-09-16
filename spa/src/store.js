import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './Time';
import JwtToken from './services/jwt-token';
import { Times, User } from './services/resources';
import SessionStorage from './services/session-storage';

Vue.use(Vuex);

/* exemplo Laracasts */
export const store = new Vuex.Store({
    state: {
        times: [], // array que recebe os times vindo da mutation set-times
        auth: {
            check: JwtToken.token != null, // verifica se o token existe, se existir o usuário está logado
            user: SessionStorage.getObject('user')
        }
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
        setUser(state, user) {
            SessionStorage.setObject('user', user);
            state.auth.user = user; // mudando o estado do auth.user
        },
        authenticated(state) {
            state.auth.check = true; // altera o sate para true
        },
    },
    actions: {
        // Executa a ação ajax para consumir os dados da api e retornar a lista de times
        'load-times'(context) {
            Times.query().then((response) => {
                let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
                context.commit('set-times', times);// faz o commit para passar os times para o set-times
            })
        },
        login(context, {email, password}) {
            // adicionando return ele retorna uma premisse
            return JwtToken.accessToken(email, password).then(response => {
                context.commit('authenticated');
                context.dispatch('getUser');
                return response;
            })
        },
        getUser(context) {
            User.query().then(response => {
                context.commit('setUser', response.data.user)
            })
        }
    }
});
