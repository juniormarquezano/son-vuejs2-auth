<template>
    <div class="container">
        <div class="row">
            <h1>BRASILEIRÃO SÉRIE A</h1>
            <h6>Olá {{ user.name }}</h6>
            <router-link :to="{ name: 'time.list' }" class="btn btn-primary">Ver Tabela</router-link>
            <router-link :to="{ name: 'time.jogo' }" class="btn btn-primary">Novo Jogo</router-link>
            <hr>
            <router-view></router-view><!-- declaração da rota -->
        </div>
    </div>
</template>

<script type="text/javascript">
    import { store } from '../store';

    export default {
        computed: {
            user() {
                return store.state.auth.user ? store.state.auth.user : { name: '' }
            }
        }
    }
</script>

<style scoped>

</style>