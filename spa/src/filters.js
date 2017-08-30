import Vue from 'vue';

Vue.filter('saldo', time => time.gp - time.gc);
Vue.filter('ucwords', value => value.charAt(0).toUpperCase()+value.slice(1));