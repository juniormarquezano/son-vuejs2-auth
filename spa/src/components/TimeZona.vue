<template>
    <div class="col-md-4">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Zona da Libertadores</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="time in timesLibertadores">
                <td>
                    <img :src="time.escudo" style="height: 30px; width: 30px;">
                    <strong>{{time.nome}}</strong>
                </td>
            </tr>
            </tbody>
        </table>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Zona de Rebaixamento</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="time in timesRebaixados">
                <td>
                    <img :src="time.escudo" style="height: 30px; width: 30px;">
                    <strong>{{time.nome}}</strong>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    import { store } from "../store";

   export default {
        computed: {
            timesLibertadores() {
                return store.getters.timesLibertadores;
            },
            timesRebaixados() {
                return store.getters.timesRebaixados;
            }
        }
    }
</script>

<style scoped>

</style>