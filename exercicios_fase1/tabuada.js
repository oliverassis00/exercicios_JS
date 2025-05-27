// Faça uma tabuada;

const prompt = require("prompt-sync") ();

let informeUmNumero = Number(prompt("Digite um número: "));

for (let i = 0; i <= 10; i ++) {
    
    console.log(informeUmNumero + " x " + i + " = " + `${informeUmNumero * i}`);

}