<template>
    <div class="container">
        <div class="row">
            <h1 class="">BRASILEIRÃO SÉRIE A</h1>
            <hr>
        </div>
        <div class="row" v-if="isAuth">
            <h5 class="pull-right">Olá {{ user.name }}</h5>
            <router-link :to="{ name: 'time.list' }" class="btn btn-primary">Ver Tabela</router-link>
            <router-link :to="{ name: 'time.jogo' }" class="btn btn-primary">Novo Jogo</router-link>
            <hr>
        </div>
        <router-view></router-view><!-- declaração da rota -->
    </div>
</template>

<script type="text/javascript">
    import { store } from '../store';

    export default {
        computed: {
            isAuth() {
                return store.state.auth.check;
            },
            user() {
                return store.state.auth.user ? store.state.auth.user : { name: '' }
            }
        }
    }
</script>

<style scoped>

</style>