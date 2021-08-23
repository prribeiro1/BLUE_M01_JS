// Projeto 01 – Projeto Detetive
// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// 1.	"Telefonou para a vítima?"
// 2.	"Esteve no local do crime?"
// 3.	"Mora perto da vítima?"
// 4.	"Devia para a vítima?"
// 5.	"Já trabalhou com a vítima?" 

// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

console.log('Olá, eu sou o DTT1-V, o detetive virtual encarregado desse caso e conto com sua colaboração para solucioná-lo.')
console.log('\n')
console.log('PROCESSANDO..')
console.log('\n')
console.log('Vamos às perguntas:')
console.log('\n')

let contador = 0

let pergunta1 = prompt('Você telefonou para a vítima? [sim/não]').toUpperCase()[0]
let pergunta2 = prompt('Você esteve no local do crime? [sim/não]').toUpperCase()[0]
let pergunta3 = prompt('Você mora perto da vítima? [sim/não]').toUpperCase()[0]
let pergunta4 = prompt('Você devia para a vítima? [sim/não]').toUpperCase()[0]
let pergunta5 = prompt('Você já trabalhou com a vítima? [sim/não]').toUpperCase()[0]

if (pergunta1 === 'S'){
  contador += 1
}
if (pergunta2 === 'S'){
  contador += 1
}
if (pergunta3 === 'S'){
  contador += 1
}
if (pergunta4 === 'S'){
  contador += 1
}
if (pergunta5 === 'S'){
  contador += 1
}

if (contador === 2){
  console.log('Você é suspeita.')
}else if (contador === 3){
  console.log('Você é cúmpice!')
}else if ( contador === 4){
  console.log('Você é cúmpice!')
}else if (contador === 5){
  console.log('Você é o (a) Assassino!!!')
}else {
  console.log('Você é inocente!')
}