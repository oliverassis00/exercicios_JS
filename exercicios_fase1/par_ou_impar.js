// Pede para o usuário digitar um número e verificamos se é par ou ímpar;
const prompt = require('prompt-sync') ();

let inserirNumero = prompt("Digite um Número qualquer: ");

if (inserirNumero % 2 === 0) {
    console.log("Número Par")
} else {
    console.log("Número Ímpar")
}
