// Usado para separar e organizar mais o código para não incluir tudo no arquivo main.js

export class Time {

    // Defino no constructor as variaveis que serão usadas no arquivo main.js
    constructor(id, nome, escudo) {
        this.id = id;
        this.nome = nome;
        this.escudo = escudo;
        this.pontos = 0;
        this.gp = 0;
        this.gc = 0;
    }

    atualizaTabela(pontos, golsPro, golsContra) {
        this.pontos += pontos; // Soma os pontos atuais mais os pontos do jogo
        this.gp += golsPro;
        this.gc += golsContra;
    }

    resultadoJogo(timeAdversario, golsTimeCasa, golsAdversario) {

        // Verificamos se houve empate entre os times
        if (golsTimeCasa === golsAdversario) {
            // Quando se tratar do time da casa utilizar o this para chamar o método, caso contrário
            // utiliza a parametro do time adversário
            this.atualizaTabela(1, golsTimeCasa, golsAdversario); // Time da Casa
            timeAdversario.atualizaTabela(1, golsAdversario, golsTimeCasa); // Time de Fora
        } else {
            // houve um vencedor
            if (golsTimeCasa > golsAdversario) {
                // Time da casa venceu
                this.atualizaTabela(3, golsTimeCasa, golsAdversario); // Time da Casa
                timeAdversario.atualizaTabela(0, golsAdversario, golsTimeCasa); // Time de Fora
            } else {
                // Time de fora venceu
                this.atualizaTabela(0, golsTimeCasa, golsAdversario); // Time da Casa
                timeAdversario.atualizaTabela(3, golsAdversario, golsTimeCasa); // Time de Fora
            }
        }
    }

}