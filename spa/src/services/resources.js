import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export class Jwt {
    static accessToken(email, password) {
        return Vue.http.post('http://vuejs2-auth.app/api/login', { email, password });
    }
}