// Tarefa 01:
// Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto,
// cada objeto precisa ter os seguintes atributos:
// - Nome
// - Duração
// - Ano
// - Diretor
// - Atores principais(lista)
// - Dados (função anônima que retorna uma string com os dados do filme)
// No final mostra no console os dados de todos os filmes ao mesmo tempo.


// const filme1 = {
//   nome: 'Space Jam: Um Novo Legado',
//   duracao: 120,
//   ano: 2021,
//   diretor: 'Malcolm D. Lee',
//   atores: ['LeBron James', 'Michael B. Jordan', 'Don Cheadle'],
//   dados() {
//     return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
//   }
// }

// const filme2 = {
//   nome: 'Viúva Negra',
//   duracao: 134,
//   ano: 2021,
//   diretora: 'Cate Shortland',
//   atores: ['Scarlett Johansson', 'Florence Pugh', 'Rachel Weisz'],
//   dados() {
//     return `O filme ${this.nome}, lançado no ano ${this.ano}, da diretora ${this.diretora}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
//   }
// }

// const filme3 = {
//   nome: 'A Guerra do Amanhã',
//   duracao: 140,
//   ano: 2021,
//   diretor: 'Chris McKay',
//   atores: ['Chris Pratt', 'Yvonne Strahovski', 'Betty Gilpin'],
//   dados() {
//     return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
//   }  
// }

// const filme4 = {
//   nome: 'Coringa',
//   duracao: 122,
//   ano: 2019,
//   diretor: 'Todd Phillips',
//   atores: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
//   dados() {
//     return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
//   }
// }


// console.log(filme1.dados())
// console.log()
// console.log(filme2.dados())
// console.log()
// console.log(filme3.dados())
// console.log()
// console.log(filme4.dados())



const catalogo = [
{
  nome: 'Space Jam: Um Novo Legado',
  duracao: 120,
  ano: 2021,
  diretor: 'Malcolm D. Lee',
  atores: ['LeBron James', 'Michael B. Jordan', 'Don Cheadle'],
  dados() {
    return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
  }
},

{
  nome: 'Viúva Negra',
  duracao: 134,
  ano: 2021,
  diretora: 'Cate Shortland',
  atores: ['Scarlett Johansson', 'Florence Pugh', 'Rachel Weisz'],
  dados() {
    return `O filme ${this.nome}, lançado no ano ${this.ano}, da diretora ${this.diretora}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
  }
},

{
  nome: 'A Guerra do Amanhã',
  duracao: 140,
  ano: 2021,
  diretor: 'Chris McKay',
  atores: ['Chris Pratt', 'Yvonne Strahovski', 'Betty Gilpin'],
  dados() {
    return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
  }  
},

{
  nome: 'Coringa',
  duracao: 122,
  ano: 2019,
  diretor: 'Todd Phillips',
  atores: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  dados() {
    return `O filme ${this.nome}, lançado no ano ${this.ano}, do diretor ${this.diretor}, dura ${this.duracao} minutos e dentre os atores, alguns deles são: ${this.atores}`
  }
}
]

for (const filme of catalogo) {
  console.log(filme)
}