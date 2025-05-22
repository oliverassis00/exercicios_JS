// Pede para o usuário digitar 2 números e uma operação matemática
const prompt = require('prompt-sync') ();

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));
let tipoOperacao = prompt("Digite o tipo de Operação a ser realizada (x, / , + , -):  ");

switch (tipoOperacao){

    case "x":
        let multiplicacao = numero1 * numero2;
        console.log("O resultado final da multiplicação é: " + multiplicacao)
        break;

    
    case "/":
        let divisao = numero1 / numero2;
        console.log("O resultado final da divisão é: " + divisao)
        break;

    
    case "+":
        let soma = numero1 + numero2;
        console.log("O resultado final da soma é: " + soma)
        break;


    
    case "-":
        let subtracao = numero1 - numero2;
        console.log("O resultado final da subtração é: " + subtracao)
        break;

    default:
        console.log("Você digitou dados incorretos!")

}

