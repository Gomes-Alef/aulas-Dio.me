//Crie um programa que dado um número imprima a sua tabuada.
const numero = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
}

//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const numeroCorrido = numeros[i];
    if (numeroCorrido % 2 === 0) {
        console.log(`O número ${numeroCorrido} é par.`)
    }
}

