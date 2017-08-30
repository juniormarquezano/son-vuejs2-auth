//import event from '../event' // comentado para utilizar o Vuex
import {store} from '../store'

export default {
    template: `
    <!-- DIV tabela -->
    <div>
        <form class="form-inline">
            <div class="form-group">
                <label class="control-label" v-if="novoJogo.casa.time">
                    {{ novoJogo.casa.time.nome }}
                    <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px">
                </label>
                <input style="width: 40px" class="form-control text-center" v-model="novoJogo.casa.gols">
            </div>
            <span>X</span>
            <div class="form-group">
                <input style="width: 40px" class="form-control text-center" v-model="novoJogo.fora.gols">
                <label class="control-label" v-if="novoJogo.fora.time">
                    <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px">
                    {{ novoJogo.fora.time.nome }}
                </label>
            </div>
            <button type="button" class="btn btn-xs btn-primary" @click="fimJogo">Fim de Jogo</button>
        </form>
    </div>
    <!-- /DIV tabela -->
    `,
    mounted(){
        this.initJogo(store.state.times);
    },
    data() {
        return {
            novoJogo: {
                casa: {
                    time: null,
                    gols: 0,
                },
                fora: {
                    time: null,
                    gols: 0,
                }
            },
        }
    },
    /* comentado para utilizar o Vuex
    mounted() {
        event.$on('get-times', (times) => {
            this.initJogo(times);
        });
    },
    */
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time;
            let timeCasa = this.novoJogo.casa.time;
            let golsTimeCasa = +this.novoJogo.casa.gols; // O + na frente serve para transformar a string em inteiro
            let golsAdversario = +this.novoJogo.fora.gols;
            // Vamos agora para o resultado do jogo
            timeCasa.resultadoJogo(timeAdversario, golsTimeCasa, golsAdversario);

            //this.$parent.showView('tabela')
            //event.$emit('show-time-list');

            store.commit('update', timeCasa);
            store.commit('update', timeAdversario);
            store.commit('show-time-list');
        },
        initJogo(times) { // Cria um novo ao clicar no botão "novo jogo"
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20);

            this.novoJogo.casa.time = times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = times[indexFora];
            this.novoJogo.fora.gols = 0;
        }
    },
}