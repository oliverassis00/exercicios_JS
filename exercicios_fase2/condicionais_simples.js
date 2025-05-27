/* Peça ao usuário para digitar sua idade e verifique se ele é maior ou menor de idade. Exiba uma mensagem apropriada. */

const prompt = require("prompt-sync") ();

let idadeUser = Number(prompt("Digite sua idade: "));

if (idadeUser >= 18) {
    console.log(`Você é maior de idade, tem ${idadeUser} anos de idade`)
} else {
    console.log(`Você tem ${idadeUser}, portanto, é menor de idade.`)
}