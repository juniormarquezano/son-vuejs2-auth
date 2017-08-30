//import {Time} from '../Time' // comentado para utilizar o Vuex
import _ from 'lodash'
import event from '../event'
//import store from '../store'; // modo son
import {store} from '../store' // modo do exemplo do laracasts para usar o Vuex

export default {
    template: `
    <!-- DIV tabela -->
    <div>
        <!--<a href="#" class="btn btn-primary" @click.prevent="showNovoJogo">Novo Jogo</a><br /><br />-->
        <!-- incluido no app.componente.js 
        <div v-if="view == 'novoJogo'">Novo Jogo</div>
        -->
        <h1><strong>TABELA</strong></h1>
        <hr>
        <input type="search" class="form-control" v-model="filter" placeholder="Buscar por time">
        <hr>
        <div class="col-md-8">
            <div class="row">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Classificação</th>
                        <th class="text-center"><a href="#" @click.prevent="sortBy('pontos')">P</a></th>
                        <th class="text-center"><a href="#" @click.prevent="sortBy('gp')">GP</a></th>
                        <th class="text-center"><a href="#" @click.prevent="sortBy('gc')">GC</a></th>
                        <th class="text-center">SG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(time, index) in timesFiltered" :class="{'success': index < 3, 'warning': index >= 3 && index < 6, 'danger': index > 15}">
                        <td>
                            <img :src="time.escudo" style="width: 30px; height: 30px" >
                            {{ time.nome }}
                        </td>
                        <td class="text-center">{{ time.pontos}}</td>
                        <td class="text-center">{{ time.gp }}</td>
                        <td class="text-center">{{ time.gc }}</td>
                        <td class="text-center">{{ time | saldo }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /DIV tabela -->
    `,
    created() {
        store.dispatch('load-times');
    },
    data() {
        return {
            /* comentado para utilizar o Vuex
            times: [
                new Time('América Mineiro', require('../assets/america_mg_60x60.png')),
                new Time('Atlético Paranaense', require('../assets/atletico-pr_60x60.png')),
                new Time('Atlético Mineiro', require('../assets/atletico_mg_60x60.png')),
                new Time('Botafogo', require('../assets/botafogo_60x60.png')),
                new Time('Chapecoense', require('../assets/chapecoense_60x60.png')),
                new Time('Corinthians', require('../assets/corinthians_60x60.png')),
                new Time('Coritiba', require('../assets/coritiba_60x60.png')),
                new Time('Cruzeiro', require('../assets/cruzeiro_60x60.png')),
                new Time('Figueirense', require('../assets/figueirense_60x60.png')),
                new Time('Flamengo', require('../assets/flamengo_60x60.png')),
                new Time('Fluminense', require('../assets/fluminense_60x60.png')),
                new Time('Grêmio', require('../assets/gremio_60x60.png')),
                new Time('Internacional', require('../assets/internacional_60x60.png')),
                new Time('Palmeiras', require('../assets/palmeiras_60x60.png')),
                new Time('Ponte Preta', require('../assets/ponte_preta_60x60.png')),
                new Time('Santa Cruz', require('../assets/santa_cruz_60x60.png')),
                new Time('Santos', require('../assets/santos_60x60.png')),
                new Time('Sport', require('../assets/sport_60x60.png')),
                new Time('Vitória', require('../assets/vitoria_60x60.png')),
            ],
            */
            // Aula 17
            order: {
                keys: ['pontos', 'gp', 'gc'], // Ordenar por colunas
                sort: ['desc', 'desc', 'asc'] // Direção da ordenação
            },
            colunas: ['p', 'gp', 'gc', 'sg'],
            filter: '', // Crio a variavel
        }
    },
    methods: {
        /*
        showNovoJogo() {
            //console.log(this.$parent.$children);
            //this.$parent.showView('novojogo');
            //event.$emit('show-time-novojogo');
            // como foi utilizado o v-show não precisamos de um tempo para renderizar, pois a tabela não foi destruída
            setTimeout(() => {
                this.$parent.$children[0].initJogo(this.times);
            });

            // No caso o $children é [0] devido a posição dos componentes no arquivo app.component.js
            //this.$parent.$children[0].initJogo(this.times);
            //event.$emit('get-times', this.times);

            store.commit('show-time-novojogo');
        },
        */
        sortBy(coluna) {
            this.order.keys = coluna;
            this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
        }
    },
    computed: {
        // Recuperando todos os times e passando os filtros com a biblioteca lodash
        timesFiltered() {
            //return _.orderBy(this.times, this.order.keys, this.order.sort);
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);
            // Retorna por filtro
            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) >= 0;
            });
        },
        times() {
            return store.state.times; // Dessa forma importamos o store onde realmente iremos utilizar
            //return this.$store.state.times; // Dessa forma fica como global
        },
    },
}