//Aula sobre importação e organização de arquivos.

const entradas = [5, 50, 10, 38, 23, 75, 12, 27, 78, 8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };