import TimeListComponent from './components/TimeList.vue'
import TimeJogoComponent from './components/TimeJogo.vue'
import TimeZonaComponent from './components/TimeZona.vue'
import LoginComponent from './components/Login.vue'
import LogoutComponent from './components/Logout.vue'

// Defino o mapa de rotas
export default [
    {
        name: 'time.list', // Rotas nomeadas
        path: '/',
        component: TimeListComponent,
        meta: { auth: true }
    },
    {
        name: 'time.jogo', // Rotas nomeadas
        path: '/jogo',
        component: TimeJogoComponent,
        meta: { auth: true }
    },
    {
        name: 'time.zona', // Rotas nomeadas
        path: '/zona',
        component: TimeZonaComponent,
        meta: { auth: true }
    },
    {
        name: 'auth.login', // Rotas nomeadas
        path: '/login',
        component: LoginComponent,
        meta: { auth: false }
    },
    {
        name: 'auth.logout', // Rotas nomeadas
        path: '/logout',
        component: LogoutComponent,
        meta: { auth: true }
    },

];