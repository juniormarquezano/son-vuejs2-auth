import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import TimeZonaComponent from './time-zona.component';

//import event from '../event'; // comentado para utilizar o Vuex
//import store from '../store';
import {store} from '../store'

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
        'time-zona': TimeZonaComponent,
    },
    template: `
    <div class="container">
        <div class="row">
            <h1>BRASILEIRÃO SÉRIE A</h1>
            <!--<a href="#" class="btn btn-primary" @click.prevent="showNovoJogo">Novo Jogo</a><br /><br />-->
            <!-- DIV novoJogo -->
            <a href="#" class="btn btn-primary" @click.prevent="showNovoJogo">Novo Jogo</a>
            <a href="#" class="btn btn-primary" @click.prevent="showTabela">Ver Tabela</a>
            <hr>
            <div v-if="view == 'novojogo'">
                <time-jogo></time-jogo>
            </div>
            <!-- /DIV novoJogo -->
            <!-- DIV tabela -->
            <div v-show="view == 'tabela'">
                <time-list></time-list>
                <time-zona></time-zona>
            </div>
            <!-- /DIV tabela -->
        </div>
    </div>
    `,
    computed: {
        view(){
            return store.state.view;
            //return this.$store.state.view;
        }
    },
    methods: {
        showNovoJogo() {
            store.commit('show-time-novojogo');
        },
        showTabela() {
            store.commit('show-time-list');
        }
    }
    /*
    mounted() { // equivalente ao ready() na versão 1 do vue
        event.$on('show-time-list', () => {
            this.view = 'tabela';
        });

        event.$on('show-time-novojogo', () => {
            this.view = 'novojogo';
        })
    },
    */
    /* comentado para utilizar o Vuex
    data() {
        return {
            view: 'tabela',
        }
    },
    */
    /*
    methods: {
        showView(view) {
            this.view = view;
        },
    },
    */
}