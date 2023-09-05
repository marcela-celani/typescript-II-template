/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum COR_ARCOIRIS {
  VERMELHO = '#ff0000',
  LARANJA = '#ff7000',
  AMARELO = '#ffff00',
  VERDE = '#00ff00',
  AZUL = '#00ffff',
  ANIL = '#0000ff',
  VIOLETA = '#8b00ff'
}

type TPessoa = {
  nome: string, 
  idade: number,
  corFavorita: string,
}

const pessoa1: TPessoa = {
  nome: 'Marcela', 
  idade: 30,
  corFavorita: COR_ARCOIRIS.AZUL,
}

const pessoa2: TPessoa = {
  nome: 'Alex', 
  idade: 30,
  corFavorita: COR_ARCOIRIS.VERMELHO,
}

const pessoa3: TPessoa = {
  nome: 'Carol', 
  idade: 30,
  corFavorita: COR_ARCOIRIS.VERDE,
}