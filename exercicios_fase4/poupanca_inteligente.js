// Solução para o Desafio Cofrinho Inteligente
const prompt = require("prompt-sync") ();

let condicaoLoop = true;
let saldoAtual = 0;

while(condicaoLoop) {

    let informeAcao = prompt("Digite uma ação (inserir / sacar / sair): ");

    switch (informeAcao){
        case "inserir":
            let valorDepositar = prompt("Qual valor da moeda?: ");
            saldoAtual = parseFloat(valorDepositar);
            
            if (parseFloat(valorDepositar) <= 0) {
                console.log("Você digitou um valor inválido ")
                break;
            } else {
                console.log(`Saldo atual: R$${saldoAtual.toFixed()}`);
            }
            break;

        case "sacar":
            let valorSacar = prompt("Qual valor deseja sacar?: ");
            saldoAtual -= parseFloat(valorSacar);

            if (parseFloat(valorSacar) > saldoAtual) {
                console.log(`Você não tem saldo suficiente para sacar: Seu saldo atual é R$${saldoAtual}`)
                break;
            } else {
                console.log(`Saldo atual: R$${saldoAtual.toFixed()}`);
            }
            break;

        case "sair":
            console.log("Sistema encerrado. Ate Logo!");
            condicaoLoop = false;
            break;

        default: 
            console.log("Digite um valor válido!")
            condicaoLoop = false;
            break;

    }



}