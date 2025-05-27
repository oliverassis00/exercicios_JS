/* Peça ao usuário uma nota de 0 a 10:

Se for >= 7: "Aprovado"

Se for >= 5 e < 7: "Recuperação"

Se for < 5: "Reprovado" */

const prompt = require("prompt-sync") ();

let nota = prompt("Digite sua nota de 0 a 10: ");

if (nota >= 7) {
    console.log("Você está aprovado!")
} else if (nota >= 5 && nota < 7){
    console.log("Você está de recuperação!")
} else {
    console.log("Você está reprovado!")
}
