// Exercício 1 - Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".

// console.log('O primeiro programa a gente nunca esquece')


//Exercício 2 - Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira

// const nome = prompt('Digite seu nome: ')

// const endereco = prompt('Digite seu endereço: ')

// const cep = prompt('Digite seu CEP: ')

// const telefone = prompt('Digite seu telefone: ')

// console.log('Nome: '+nome)
// console.log('Endereço: '+endereco)
// console.log('CEP '+cep+' - '+telefone)


// Exercício 3 - Letra de música - Faça um programa que mostre na tela uma letra de música que você gosta (proibido letras do Justin Bieber).

// console.log('Lindo, lindo, lindo és\nGlória, glória eu Te dou\nJesus, Jesus\n\nMe leva à sala do trono\nMostra a Tua beleza, quero ver Tua face\nMe leva à sala do trono\nMostra a Tua beleza, quero ver Tua face')


// Exercício 4 - Tabela de notas - Você foi contratado ou contratada por uma escola para fazer o sistema de boletim dos alunos.
// Como primeiro passo, escreva um programa que produza a seguinte saída:
// ALUNO (A)  NOTA
// =========  ====
// ALINE           9.0
// MÁRIO          DEZ
// SÉRGIO        4.5
// SHIRLEY       7.0

// console.log('ALUNO (A)   NOTA:')
// console.log('=========   =====')
// console.log('\n')
// console.log('ALINE       9.0')
// console.log('MÁRIO       DEZ')
// console.log('SÉRGIO      4.5')
// console.log('SHIRLEY     7.0')


// Exercício 5 - Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
// Cadastro de Clientes
// 0 – Fim
// 1 - Inclui
// 2 - Altera
// 3 - Exclui"
// 4 - Consulta"

// console.log('Cadastro de Clientes:')
// console.log('\n')
// console.log('0 - Fim')
// console.log('1 - Inclui')
// console.log('2 - Altera')
// console.log('3 - Exclui')
// console.log('4 - Consulta')
// console.log('\n')

// let escolha = +prompt('Digite sua opção: ')

// console.log(`Você escolheu a opção ${escolha}`)



// Exercício 6 -  Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:
// •	Quantidade de vida de um monstro (entre 10 e 50);
// •	Valor do ataque do jogador por turno (entre 5 e 10);
// •	Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
// •	O jogador irá derrotar o monstro em 8 turnos.

// let vidaMonstro = 40
// let ataqueJogador = 5

// console.log('O jogador irá derrotar o monstro em '+vidaMonstro / ataqueJogador+' turnos')


// Exercício 7 -  E os 10% do garçom?
// •	Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// •	Defina uma variável para o valor da taxa de serviço que é de 10%;
// •	Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99

// let refeicao = 42.54
// let taxa = 1.10
// let valorTotal = refeicao * taxa
// let valorFinal = valorTotal.toFixed(2)

// console.log(`R$ ${valorFinal}`)


// Exercício 8 -   Qual o valor do troco?
// •	Defina uma variável para o valor de uma compra que custou R$100,98;
// •	Defina uma variável para o valor que o cliente pagou R$150,00;
// •	Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

// let valorCompra = 100.98
// let valorPago = 150.00
// let valorTroco = valorPago - valorCompra
// let troco = valorTroco.toFixed(2)

// console.log(troco)


// Exercício 9 -   Você está na flor da idade?
// •	Defina uma variável para o valor do ano do nascimento;
// •	Defina uma variável para o valor do ano atual;
// •	Defina uma variável que calcula o valor final da idade da pessoa;
// •	Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

// let anoNascimento = prompt('Digite seu ano de nascimento: ')
// let anoAtual = 2021
// let idade = anoAtual - anoNascimento

// console.log('Você tem '+idade+' anos. Você está na flor da idade!')


// Exercício 10 -   Conversor de moedas
//  Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:
// •	DOLAR
// •	EURO
// •	LIBRA ESTERLINA
// •	DÓLAR CANADENSE
// •	PESO ARGENTINO
// •	PESO CHILENO
// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
// Mostrar o resultado no formato U$9999.99

// let real = prompt('Digite o valor em Real: ')
// let dolar = real / 5.30
// let euro = real / 6.20
// let libraEsterlina = real / 7.28
// let dolarCanadense = real / 4.19
// let pesoArgentino = real / 0.055
// let pesoChileno = real / 0.0067

// let Dolar = dolar.toFixed(2)
// let Euro = euro.toFixed(2)
// let LibraEsterlina = libraEsterlina.toFixed(2)
// let DolarCanadense = dolarCanadense.toFixed(2)
// let PesoArgentino = pesoArgentino.toFixed(2)
// let PesoChileno = pesoChileno.toFixed(2)

// console.log('\n')
// console.log(`Dolar: U$${Dolar}\nEuro: €${Euro}\nLibra Esterlina: £${LibraEsterlina}\nDolar Canadense: C$${DolarCanadense}\nPeso Argentino: $${PesoArgentino}\nPeso Chileno: CLP $${PesoChileno}`)


// Exercício 11 -   Calculadora de aumento de aluguel - Parte 1
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99
// Exemplo:
// Valor do aluguel = 1000
// Valor do aluguel reajustado = R$ 1310,00

// let aluguel = +prompt('Digite o valor do aluguel: ')
// let reajuste = aluguel * 1.31
// let aluguelReajustado = reajuste.toFixed(2)

// console.log(`O valor do aluguel reajustado é: R$ ${aluguelReajustado}`)


// Exercício 12-  Calculadora de aumento de aluguel - Parte 2
// Altere sua calculadora (feita na parte 1) para receber além do valor do aluguel, o percentual do reajuste no formato 99%.
// Dica: Descubra uma forma de transformar o percentual recebido em um número para efetuar o cálculo.
// Exemplo:
// Valor do aluguel = 1000
// Percentual do reajuste = 31%
// Valor do aluguel reajustado = R$1310,00

// let aluguel = +prompt('Digite o valor do aluguel: ')
// let reajuste = 31 / 100 * aluguel + aluguel
// let aluguelReajustado = reajuste.toFixed(2)

// console.log(`Valor do Aluguel: R$ ${aluguel}\nPercentual do reajuste: 31%\nValor do aluguel reajustado: R$ ${aluguelReajustado}`)