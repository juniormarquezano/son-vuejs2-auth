import Vue from 'vue' // importa o vue
import VueRouter from 'vue-router' // Importei o vue-router
import routes from './router.map' // importo a rotas declaradas no router.map.js
import { store } from './store'

Vue.use(VueRouter); // declarei o uso do vue-router

const router = new VueRouter({
    routes // vindo do import, colocando o mesmo nome não preciso fazer algo como routes: routeMap
});

router.beforeEach((to, from, next) => {
    if (! store.state.auth.check && to.meta.auth) {
        return router.push({ name: 'auth.login'} );
    }
    next();
});

// exporta a router
export default router;