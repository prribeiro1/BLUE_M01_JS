// EXERCÍCIO 01 - Considere a string A = "Os limites só existem se você os deixar existir.(goku)". Que fatia corresponde a (goku)?

//let frase = 'Os limites só existem se você os deixar existir.(goku)'

// fraseTamanho = frase.length;
// fraseFatiada = frase.slice(48);

// console.log(fraseTamanho);
// console.log(fraseFatiada);


// EXERCÍCIO 02 - Escreva um programa que solicite uma frase ao usuário e escreva a frase toda em maiúscula e sem espaços em branco.

// dá para usar qualquer uma das duas opções no fraseRep
// let frase = prompt('Digite uma frase: ')
// let fraseRep = frase.replace( / /g, '' )
// let fraseRep = frase.split(' ').join('')

// console.log(fraseRep.toUpperCase())


// EXERCÍCIO 03 - Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada uma das informações da seguinte forma:
// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula
// Exemplo Entrada:
// Nome: bruno fabri
// Endereço: Rua ABC
// Hobby: jogar cs
// Exemplo Saída:
// Nome: BRUNO FABRI
// Endereço: rua abc
// Hobby: Jogar cs

// let nome = prompt('Digite seu nome: ')
// let endereco = prompt('Digite seu endereço: ')
// let hobby = prompt('Digite seu hobby: ')

// let nomeFinal = nome.toUpperCase()
// let enderecoFinal = endereco.toLowerCase()
// let hobbyFinal = hobby[0].toUpperCase() + hobby.substr(1)

// console.log(nomeFinal)
// console.log(enderecoFinal)
// console.log(hobbyFinal)


// EXERCÍCIO 04 - Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

// let numero = +prompt('Digite um número: ')

// if (numero % 2 === 0){
//   console.log('Número PAR!')
// } else {
//   console.log('Número ÍMPAR!')
// }


// EXERCÍCIO 05 - Parte 1
// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.

// let numero = +prompt('Digite um número: ')

// if (numero > 0){
//   console.log(`O número ${numero} é POSITIVO!`)
// } else if (numero < 0){
//   console.log(`O número ${numero} é NEGATIVO!`)
// } else{
//   console.log(`O número ${numero} é NEUTRO!`)
// }


// Parte 2
// Agora implemente a funcionalidade de não aceitar o número 0 no input.


// let numero = +prompt('Digite um número: ')

// if (numero > 0){
//   console.log(`O número ${numero} é POSITIVO!`)
// } else if (numero < 0){
//   console.log(`O número ${numero} é NEGATIVO!`)
// } else{
//   console.log('Digite outro número')
// }


// EXERCÍCIO 06 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.

// let numero1 = +prompt('Digite um número: ')
// let numero2 = +prompt('Digite outro número: ')

// if (numero1 > numero2){
//   console.log(`O maior número é o ${numero1}`)
// } else if (numero1 < numero2){
//   console.log(`O maior número é o ${numero2}`)
// } else{
//   console.log('Os números são iguais!')
// }


// EXERCÍCIO 07 - Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, caso escreva outra letra: Sexo Inválido.

// let genero = prompt('Digite seu genero [F/M]: ').toUpperCase()

// if (genero === 'F'){
//   console.log('Feminino')
// }else if (genero === 'M'){
//   console.log('Masculino')
// }else {
//   console.log('Sexo inválido')
// }


// EXERCÍCIO 08 - Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
// •	Se a nota for menor que 6.0, deve exibir a nota F.
// •	Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// •	Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// •	Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.


// let nota = +prompt('Digite sua nota [0 - 10]: ')

// if (nota < 6){
//   console.log('NOTA F')
// }else if (nota <= 7){
//   console.log('NOTA D')
// }else if (nota <= 8){
//   console.log('NOTA C')
// }else if (nota <= 9){
//   console.log('NOTA B')
// }else if (nota <= 10){
//   console.log('NOTA A!')
// }