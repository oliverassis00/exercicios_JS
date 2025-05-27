// O maior número entre 3

const prompt = require('prompt-sync') ();

let primeiroNumero = Number(prompt("Digite o primeiro número: "));
let segundoNumero = Number(prompt("Digite o segundo Número "));
let terceiroNumero = Number(prompt("Digite o terceriro Número "));

if (primeiroNumero >= segundoNumero && primeiroNumero >= terceiroNumero) {
    console.log(`O maior número é o ${primeiroNumero}`);
} else if (segundoNumero >= primeiroNumero && segundoNumero >= terceiroNumero) {
    console.log(`O maior número é o ${segundoNumero}`);
} else {
    console.log(`O maior número é o ${terceiroNumero}`);
}
