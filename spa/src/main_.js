import Vue from 'vue'
import {Time} from './time'; // Importo a classe e defino o caminho
import _ from 'lodash';

// Carrega o bootstrap sem a necessidade de incluir link no html utilizando o url-loader
// É necessário registrar arquivo no webpackconfig.js, conforme linhas 34 a 37
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
    el: '#app',
    data: {
        /* Primeiras aulas
        titulo: 'Minha primeira aplicação VueJs 2.0',
        numeroInteiro: 10,
        numeroFloat: 10.50,
        bool: true,
        objeto: {
            name: 'Junior Marquezano'
        },
        link: 'http://localhost:8080'
        */
        // crio uma nova instância de Time() e passo o nome com o require defino o caminho do arquivo
        // de imagem
        //time: new Time('Corinthians', require('./assets/corinthians_60x60.png')),
        //time1: new Time('Botafogo', require('./assets/botafogo_60x60.png'))
        // Interações com v-form passando array ou objeto
        times: [
            new Time('América Mineiro', require('./assets/america_mg_60x60.png')),
            new Time('Atlético Paranaense', require('./assets/atletico-pr_60x60.png')),
            new Time('Atlético Mineiro', require('./assets/atletico_mg_60x60.png')),
            new Time('Botafogo', require('./assets/botafogo_60x60.png')),
            new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
            new Time('Corinthians', require('./assets/corinthians_60x60.png')),
            new Time('Coritiba', require('./assets/coritiba_60x60.png')),
            new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
            new Time('Figueirense', require('./assets/figueirense_60x60.png')),
            new Time('Flamengo', require('./assets/flamengo_60x60.png')),
            new Time('Fluminense', require('./assets/fluminense_60x60.png')),
            new Time('Grêmio', require('./assets/gremio_60x60.png')),
            new Time('Internacional', require('./assets/internacional_60x60.png')),
            new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
            new Time('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
            new Time('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
            new Time('Santos', require('./assets/santos_60x60.png')),
            new Time('Sport', require('./assets/sport_60x60.png')),
            new Time('Vitória', require('./assets/vitoria_60x60.png')),
        ],
        // Aula 17
        order: {
            keys: ['pontos', 'gp', 'gc'], // Ordenar por colunas
            sort: ['desc', 'desc', 'asc'] // Direção da ordenação
        },
        colunas: ['p', 'gp', 'gc', 'sg'],
        filter: '', // Crio a variavel
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
        view: 'tabela',
        /* Passando objetos
        objeto: {
            a: 'A',
            b: 'B',
            c: 'C',
            d: 'D',
            e: 'E',
        }
        */
    },
    // Método created() para inicializar junto com vue
    /*
    created() {

        let indexCasa = Math.floor(Math.random() * 20),
            indexFora = Math.floor(Math.random() * 20);

        this.novoJogo.casa.time = this.times[indexCasa];
        this.novoJogo.casa.gols = 0;
        this.novoJogo.fora.time = this.times[indexFora];
        this.novoJogo.fora.gols = 0;

    },
    */
    computed: {
        // Recuperando todos os times e passando os filtros com a biblioteca lodash
        timesFiltered() {
            //return _.orderBy(this.times, this.order.keys, this.order.sort);
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);
            // Retorna por filtro
            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) >= 0;
            });
        }
    },
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time;
            let golsTimeCasa = +this.novoJogo.casa.gols; // O + na frente serve para transformar a string em inteiro
            let golsAdversario = +this.novoJogo.fora.gols;
            // Vamos agora para o resultado do jogo
            this.novoJogo.casa.time.resultadoJogo(timeAdversario, golsTimeCasa, golsAdversario);

            this.showView('jogos')
        },
        criarNovoJogo() { // Cria um novo ao clicar no botão "novo jogo"
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20);

            this.novoJogo.casa.time = this.times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = this.times[indexFora];
            this.novoJogo.fora.gols = 0;
            this.showView('novoJogo');
        },
        showView(view) {
            this.view = view;
        },
        sortBy(coluna) {
            this.order.keys = coluna;
            this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
        }
    },
    filters: {
        saldo(time) {
            return time.gp - time.gc;
        }
    }
});
