<template>
    <!-- DIV tabela -->
    <div>
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
</template>

<script type="text/javascript">
    import _ from 'lodash'
    import event from '../event'
    import { store } from '../store' // modo do exemplo do laracasts para usar o Vuex

    export default {
        created() {
            store.dispatch('load-times');
        },
        data() {
            return {
                order: {
                    keys: ['pontos', 'gp', 'gc'], // Ordenar por colunas
                    sort: ['desc', 'desc', 'asc'] // Direção da ordenação
                },
                colunas: ['p', 'gp', 'gc', 'sg'],
                filter: '', // Crio a variavel
            }
        },
        methods: {
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
</script>

<style scoped>

</style>