// DESAFIO 01
// Reajuste salarial
// As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// •	salários até R$ 280,00 (incluindo) : aumento de 20%
// •	salários entre R\$ 280,00 e R$ 700,00 : aumento de 15%
// •	salários entre R\$ 700,00 e R$ 1500,00 : aumento de 10%
// •	salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
// •	o salário antes do reajuste;
// •	o percentual de aumento aplicado;
// •	o valor do aumento;
// •	o novo salário, após o aumento.

// let salario = +prompt('Digite seu salário: ')

// console.log('\n')
// if (salario <= 280){
//   console.log(`Salário antes do reajuste: R$${salario}\nPercentual do aumento aplicado: 20%\nValor do aumento: R$${20 / 100 * salario}\nNovo salário: R$${20 / 100 * salario + salario}`)
// }else if (salario <= 700){
//   console.log(`Salário antes do reajuste: R$${salario}\nPercentual do aumento aplicado: 15%\nValor do aumento: R$${15 / 100 * salario}\nNovo salário: R$${15 / 100 * salario + salario}`)
// }else if (salario <= 1500){
//   console.log(`Salário antes do reajuste: R$${salario}\nPercentual do aumento aplicado: 10%\nValor do aumento: R$${10 / 100 * salario}\nNovo salário: R$${10 / 100 * salario + salario}`)
// }else if (salario > 1500){
//   console.log(`Salário antes do reajuste: R$${salario}\nPercentual do aumento aplicado: 5%\nValor do aumento: R$${5 / 100 * salario}\nNovo salário: R$${5 / 100 * salario + salario}`)
// }

// OU

// let salario = +prompt("Digite o valor do salário do colaborador: ");

// if (salario <= 280) {
//     percentual = 20;
// } else if (salario <= 700) {
//     percentual = 15;
// } else if (salario <= 1500) {
//     percentual = 10;
// } else {
//     percentual = 5;
// }

// console.log(`O salario original é: R$  ${salario}`);
// console.log(`O valor do percentual é: ${percentual}%`);

// percentual = percentual / 100;
// aumento = percentual * salario;
// novoSalario = salario + aumento;

// console.log(`Aumento foi de: R$ ${aumento.toFixed(2)}`);
// console.log(`Novo salário tem o valor de: R$ ${novoSalario.toFixed(2)}`);



// DESAFIO 02
// Jogo da adivinhação
// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

// let computador = Math.floor(Math.random() * 10)
// let usuario = +prompt('Tente descobrir o número escolhido pelo computador [0 - 10]: ')

// if (computador === usuario){
//   console.log(`O Computador escolheu o número ${computador}, por isso, você VENCEU!!`)
// }else{
//   console.log(`O Computador escolheu o número ${computador}, por isso, você PERDEU!`)
// }


// DESAFIO 3
// Caixa eletrônico
// Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 9 e quatro notas de 1.

// let valor = +prompt("Digite um valor para saque de [10-600]: ");

// cem = Math.trunc(valor / 100);
// valor = valor - (cem * 100);

// cinquenta = Math.trunc(valor / 50);
// valor = valor - (cinquenta * 50);

// dez = Math.trunc(valor / 10);
// valor = valor - (dez * 10);

// cinco = Math.trunc(valor / 5);
// valor = valor - (cinco * 5);

// um = valor;

// console.log(`Quantidade de Notas de R$100,00 = ${cem}`);
// console.log(`Quantidade de Notas de R$ 50,00 = ${cinquenta}`);
// console.log(`Quantidade de Notas de R$ 10,00 = ${dez}`);
// console.log(`Quantidade de Notas de R$  5,00 = ${cinco}`)
// console.log(`Quantidade de Notas de R$  1,00 = ${um}`)
