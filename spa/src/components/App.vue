<template>
    <div class="container">
        <div class="row">
            <h1>BRASILEIRÃO SÉRIE A</h1>
            <router-link to="/" class="btn btn-primary">Ver Tabela</router-link>
            <router-link to="/jogo" class="btn btn-primary">Novo Jogo</router-link>
            <hr>
            <router-view></router-view><!-- declaração da rota -->
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        //
    }
</script>

<style scoped>

</style>