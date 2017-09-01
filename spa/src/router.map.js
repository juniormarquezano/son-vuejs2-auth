import TimeListComponent from './components/TimeList.vue'
import TimeJogoComponent from './components/TimeJogo.vue'
import TimeZonaComponent from './components/TimeZona.vue'

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
    }
];