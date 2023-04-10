/*
let é uma variável que consigo alterar valor
let variavel = 10;

const é uma variável estática, constante, não consigo alterar valor depois de declarada
const pi = 3.14;


Desafio aula1: Faça um programa que calcule o valor gasto de combustível em uma viagem.

Você terá 3 variáveis, sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem. 
*/


const precoCombustivel = 5.79;
const kmsPorLitro = 10; 
const distanciaKm = 100;

const calculo = distanciaKm / kmsPorLitro * precoCombustivel;

console.log(calculo.toFixed(2));

