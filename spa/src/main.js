import Vue from 'vue'
import './filters'
import AppComponent from './components/App.vue'
import TimeListComponent from './components/TimeList.vue'
import { store } from './store'
import VueRouter from 'vue-router' // Importei o vue-router

Vue.use(VueRouter); // declarei o uso do vue-router

// Carrega o bootstrap sem a necessidade de incluir link no html utilizando o url-loader
// É necessário registrar arquivo no webpackconfig.js, conforme linhas 34 a 37
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap'); // carrega o js do bootstrap

// Defino o mapa de rotas
const routesMap = [
    {
        path: '/', // Rota que será acessada o browser
        component: TimeListComponent // Qual o componente será acessado
    }
];
// Declaro que routes vai ser routesMap
const router = new VueRouter({
    routes: routesMap
});

let meuVue = new Vue({
    router, // a mesma coisa de router: router
    el: '#app',
    components: {
        'app': AppComponent
    },
    store // seria a mesma coisa de store: store nos novos padrões ES6
});
