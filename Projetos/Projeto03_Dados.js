const prompt = require('prompt-sync')({sigint: true});


var rodadas = 0;
var jogador = 0;
var jogadores = [];

rodadas = prompt('Quantas rodadas serão? ');
jogador = prompt('Quantos jogadores serão? ');


for (let i = 1; i <= jogador; i++){
let nomes;

if (i == 1) {
    console.log();
}
nomes = prompt(`Informe o nome do jogador ${i}: `);

jogadores.push(nomes);
}

for (let i = 1; i <= rodadas; i++){
 
    let rodada = {
        nome: `RODADA ${i}`,
        jogadas: [],
    }

    for (let j = 1; j <= jogador; j++){

        let jogador = {
            nome: jogadores[j - 1],
            numero: Math.floor(Math.random() * 6 + 1),
        }
 
        rodada.jogadas.push(jogador);
    }

    rodada.jogadas.sort(function(a, b) {
        return b.numero - a.numero;
    });

    console.log(`\n${rodada.nome}:`)
    console.log('----------------------------------------------------------------');
    console.log(rodada.jogadas);
    console.log(`Vencedor da rodada: "${rodada.jogadas[0].nome}" com o "número ${rodada.jogadas[0].numero}".`)
 
    if(i === 1){
        prompt('\nPressione a tecla ENTER para a próxima rodada');
    } else {
        prompt('\nPressione a tecla ENTER para a FINALIZAR o jogo');        
    }
}