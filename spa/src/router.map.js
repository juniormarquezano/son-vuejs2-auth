import TimeListComponent from './components/TimeList.vue'
import TimeJogoComponent from './components/TimeJogo.vue'
import TimeZonaComponent from './components/TimeZona.vue'
import LoginComponent from './components/Login.vue'

// Defino o mapa de rotas
export default [
    {
        name: 'time.list', // Rotas nomeadas
        path: '/',
        component: TimeListComponent
    },
    {
        name: 'time.jogo', // Rotas nomeadas
        path: '/jogo',
        component: TimeJogoComponent
    },
    {
        name: 'time.zona', // Rotas nomeadas
        path: '/zona',
        component: TimeZonaComponent
    },
    {
        name: 'auth.login', // Rotas nomeadas
        path: '/login',
        component: LoginComponent,
    }

];