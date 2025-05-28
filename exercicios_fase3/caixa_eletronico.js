const prompt = require('prompt-sync') ();

let saldo = 1000;
let totalSaques = 0;

console.log(`Bem vindo ao Caixa Eletronico Banco Boom!`)

for (let i = 1; i <= 3; i ++) {

    console.log(`Tentativa ${i}`)
    let saque = Number(prompt("Digite o Valor do Saque (R$): "))

    if (saque <= 0) {
        console.log("Valor inválido para operação!");
    } else if (saque > saldo ) {
        console.log(`Valor acima do permitido! Você possuí R$${saldo}!`)
    } else if (saque <= saldo) {
        totalSaques ++;
        saldo -= saque;
        console.log(`Saque realizado com sucesso! Saldo atual R$${saldo}!`)

        if (saldo == 0) {
            console.log(`\nFinalizando as operações por falta de Saldo! Saldo atual R$${saldo}!`)
            break;
        }
    }  

}

console.log(`
Operações Finalizadas.
Saldo final: R$${saldo}
Total de Saques Realizados: ${totalSaques}
`);