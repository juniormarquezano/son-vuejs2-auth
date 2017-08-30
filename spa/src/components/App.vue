<template>
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
</template>

<script type="text/javascript">
    import TimeListComponent from './TimeList.vue';
    import TimeJogoComponent from './TimeJogo.vue';
    import TimeZonaComponent from './TimeZona.vue';
    import { store } from '../store'

    export default {
        components: {
            'time-list': TimeListComponent,
            'time-jogo': TimeJogoComponent,
            'time-zona': TimeZonaComponent,
        },
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
    }
</script>

<style scoped>

</style>