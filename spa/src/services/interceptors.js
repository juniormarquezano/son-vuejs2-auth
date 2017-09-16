import Vue from 'vue';
import JwtToken from './jwt-token';

Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', JwtToken.getAuthorizationHeader());
    next();
});