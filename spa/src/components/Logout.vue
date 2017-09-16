<template>
    <div class="row text-center">
        <div class="alert alert-info">
            Efetuando Logout...
        </div>
    </div>
</template>

<script type="text/javascript">

    import { store } from '../store'

    export default {
        mounted() {
            setTimeout(() => {
                this.logout();
            }, 3000)
        },
        methods: {
            logout() {
                store.commit('unauthenticated');
                this.$router.push({ name: 'auth.login' });
            }
        }
    }
</script>