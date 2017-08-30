import Vue from 'vue'
import './filters'
import AppComponent from './components/App.vue'
import { store } from './store'
//import store from './store'

// Carrega o bootstrap sem a necessidade de incluir link no html utilizando o url-loader
// É necessário registrar arquivo no webpackconfig.js, conforme linhas 34 a 37
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap'); // carrega o js do bootstrap

let meuVue = new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    },
    store // seria a mesma coisa de store: store nos novos padrões ES6
});
