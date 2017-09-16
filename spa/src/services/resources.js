import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
require('./interceptors');

export class Jwt {
    static accessToken(email, password) {
        return Vue.http.post('http://vuejs2-auth.app/api/login', { email, password });
    }
}

const Times = Vue.resource('http://vuejs2-auth.app/api/times');
const User = Vue.resource('http://vuejs2-auth.app/api/user');

export { Times, User }