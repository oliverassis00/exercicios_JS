/* O programa deve:

Gerar um número aleatório entre 1 e 10.

Dar ao usuário 3 chances para acertar.

Informar se acertou ou errou após cada tentativa.

Mostrar o número certo no final, se ele não acertar. */

const prompt = require("prompt-sync")();

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroSecreto = gerarNumeroAleatorio(1, 10);
let acertou = false;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let palpite = Number(prompt(`Tentativa ${tentativa}: Adivinhe o número (1 a 10): `));

  if (palpite === numeroSecreto) {
    console.log(`🎉 Parabéns! Você acertou o número ${numeroSecreto} na tentativa ${tentativa}!`);
    acertou = true;
    break;
  } else {
    console.log("❌ Errado! Tente novamente.");
  }
}

if (!acertou) {
  console.log(`😢 Que pena! O número era ${numeroSecreto}.`);
}

