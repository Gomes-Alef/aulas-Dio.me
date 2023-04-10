
const { gets, print } = require('./aula7_funcoes-auxiliares');

/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5 - 50 - 10 - 98 - 23

    Saída:
    98

*/


const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);