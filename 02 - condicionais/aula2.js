/* Exemplo da segunda aula, o assunto foi condicionais:

const numero = 0;

const verificaNumeroPar = (numero % 2) === 0;

if (verificaNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}


Desafio: Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol'
const kilometroPorLitro = 12;
const distanciaEmKm = 540;

const litrosGastos = distanciaEmKm / kilometroPorLitro;

if (tipoCombustivel === 'Etanol') {
   const valorGasto = litrosGastos * precoEtanol;
   console.log(valorGasto);
} else {
    const valorGasto = litrosGastos * precoGasolina;
    console.log(valorGasto);
}


