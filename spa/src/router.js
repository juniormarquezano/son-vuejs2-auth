import Vue from 'vue' // importa o vue
import VueRouter from 'vue-router' // Importei o vue-router
import routes from './router.map' // importo a rotas declaradas no router.map.js

Vue.use(VueRouter); // declarei o uso do vue-router

const router = new VueRouter({
    routes // vindo do import, colocando o mesmo nome não preciso fazer algo como routes: routeMap
});

// exporta a router
export default router;