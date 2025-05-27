/* Peça 5 números ao usuário e ao final mostre qual foi o maior número digitado. */

const prompt = require("prompt-sync") ();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));
let numero4 = Number(prompt("Digite o quarto número: "));
let numero5 = Number(prompt("Digite o quinto número: "));

if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4 && numero1 > numero5) {
    console.log(`O maior número digitado é o número ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3 && numero2 > numero4 && numero2 > numero5) {
    console.log(`O maior número digitado é o número ${numero2}`);
} else if (numero3 > numero1 && numero3 > numero2 && numero3 > numero4 && numero3 > numero5) {
    console.log(`O maior número digitado é o número ${numero3}`);
} else if (numero4 > numero1 && numero4 > numero2 && numero4 > numero3 && numero4 > numero5) {
    console.log(`O maior número digitado é o número ${numero4}`);
} else {
    console.log(`O maior número digitado é o número ${numero5}`);
}