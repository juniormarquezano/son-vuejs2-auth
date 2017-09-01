import Vue from 'vue'
import './filters'
import AppComponent from './components/App.vue'
import { store } from './store'
import router from './router'
import SessionStorage from './services/session-storage'

// Carrega o bootstrap sem a necessidade de incluir link no html utilizando o url-loader
// É necessário registrar arquivo no webpackconfig.js, conforme linhas 34 a 37
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap'); // carrega o js do bootstrap

//window.sessionStorage.setItem('name', 'Junior Marquezano');
//window.sessionStorage.removeItem('name');
//console.log(SessionStorage.set('nome', 'Junior'));
//console.log(SessionStorage.get('nome'));
//SessionStorage.remove('nome');
console.log(SessionStorage.setObject('nome', {'nome' : 'Junior Marquezano'}));
console.log(SessionStorage.getObject('nome'));

let meuVue = new Vue({
    router, // a mesma coisa de router: router
    el: '#app',
    components: {
        'app': AppComponent
    },
    store // seria a mesma coisa de store: store nos novos padrões ES6
});
