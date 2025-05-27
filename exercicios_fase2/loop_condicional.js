/* Peça ao usuário um número e continue pedindo enquanto ele não digitar um número maior que 100. */

const prompt = require("prompt-sync") ();

let digiteNumero = Number(prompt("Digite um número: "));

while (digiteNumero <= 100) {
    digiteNumero = Number(prompt("Digite um número novamente: "));

    if (digiteNumero > 100) {
        break;
    }
}

