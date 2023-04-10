/* lista de exercícios:

1) Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
= Média acima de 7, Aprovação;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Média:' + media.toFixed(2));
    console.log('Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Média:' + media.toFixed(2));
    console.log('Recuperação!');
} else {
    console.log('Média:' + media.toFixed(2));
    console.log('Aprovado!');
}

console.log('');

/*

2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do pesoa;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave.

*/

const peso = 77;
const altura = 1.72;
const imc = peso / Math.pow(altura,2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade grave');
}

console.log('');

/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adeqquado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const condicao = 4;

if (condicao === 1) {
    precoDesconto = precoEtiqueta - ((precoEtiqueta * 10) / 100);
    console.log(precoDesconto.toFixed(2)); 
} else if (condicao === 2) {
    precoDesconto = precoEtiqueta - ((precoEtiqueta * 15) / 100);
    console.log(precoDesconto.toFixed(2));
} else if (condicao === 3) {
    precoDesconto = precoEtiqueta;
    console.log(precoDesconto.toFixed(2));
} else {
    precoJuros = precoEtiqueta + ((precoEtiqueta * 10) / 100)
    console.log(precoJuros.toFixed(2));
}