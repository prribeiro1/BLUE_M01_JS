// Projeto 02 – Jogo Jokenpô
// Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você. O programa tem que:
// • Permitir que eu decida quantas rodadas iremos fazer;
// • Ler a minha escolha (Pedra, papel ou tesoura);
// • Decidir de forma aleatória a decisão do computador;
// • Mostrar quantas rodadas cada jogador ganhou;
// • Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// • Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.

while (true) {
  var rodadas = prompt('Quantas rodadas serão? ')
  console.log()
  console.log('Opções: pedra - papel - tesoura')
  var opcoes = ['pedra', 'papel', 'tesoura']
  var euVenci = 0
  var iaVenceu = 0

  for (let i = 0; i < rodadas; i++){
    console.log()
    var minhaEscolha = prompt('Qual é a sua escolha? ')
    var escolhaIA = opcoes[Math.floor(Math.random() * opcoes.length)]
    console.log()
    console.log(`Rodada: ${i+1}`)
    console.log()
    if (minhaEscolha === 'pedra' && escolhaIA === 'pedra'){
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Vocês empataram!`)
    }else if (minhaEscolha === 'pedra' && escolhaIA === 'papel'){
      iaVenceu += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: A IA VENCEU!!`)
    }else if (minhaEscolha === 'pedra' && escolhaIA === 'tesoura'){
      euVenci += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Você VENCEU!!`)
    }else if (minhaEscolha === 'papel' && escolhaIA === 'pedra'){
      euVenci += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Você VENCEU!!`)
    }else if (minhaEscolha === 'papel' && escolhaIA === 'papel'){
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Vocês empataram!`)
    }else if (minhaEscolha === 'papel' && escolhaIA === 'tesoura'){
      iaVenceu += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: A IA VENCEU!!`)
    }else if (minhaEscolha === 'tesoura' && escolhaIA === 'pedra'){
      iaVenceu += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: A IA VENCEU!!`)
    }else if (minhaEscolha === 'tesoura' && escolhaIA === 'papel'){
      euVenci += 1
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Você VENCEU!!`)
    }else if (minhaEscolha === 'tesoura' && escolhaIA === 'tesoura'){
      console.log(`Você escolheu: ${minhaEscolha}\nA IA escolheu: ${escolhaIA}\nResultado: Vocês empataram!`)
    }
  }

  console.log()
  if (euVenci > iaVenceu){
    console.log(`Você foi o grande vencedor com ${euVenci} vitórias. Parabéns!!!`)
  }else if (euVenci < iaVenceu){
    console.log(`A IA foi a grande vencedora com ${iaVenceu} vitórias. Tente novamente!`)
  }else{
    console.log('Vocês empataram. Que tal mais uma queda?')
  }
  console.log()
  var resposta = prompt('Você deseja continuar? [S/N] ').toUpperCase()[0]

  if (resposta === 'N') {
    console.log()
    console.log('Obrigado por jogar. Até uma próxima!!')
    break
  }else {
    console.log()
  }
}