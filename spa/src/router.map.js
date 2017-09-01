import TimeListComponent from './components/TimeList.vue'
import TimeJogoComponent from './components/TimeJogo.vue'
import TimeZonaComponent from './components/TimeZona.vue'
import LoginComponent from './components/Login.vue'

// Defino o mapa de rotas
export default [
    {
        path: '/',
        component: TimeListComponent
    },
    {
        path: '/jogo',
        component: TimeJogoComponent
    },
    {
        path: '/zona',
        component: TimeZonaComponent
    },
    {
        path: '/login',
        component: LoginComponent
    }

];