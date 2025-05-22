// Recebe um ano de nascimento e retorna se é maior de idade ou não
const prompt = require("prompt-sync") ();

let informeAnoNascimento = Number(prompt("Digite seu ano de nascimento: "));
let idadeAtual = 2025 - informeAnoNascimento;

if (idadeAtual >= 18) {
    console.log(`Você tem ${idadeAtual} anos de idade e é maior de idade!`)
} else {
    console.log(`Você tem ${idadeAtual} anos de idade e é menor de idade!`)
}