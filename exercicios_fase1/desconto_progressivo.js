// Um e-commerce dá desconto de acordo com a quantidade de produtos. Peça a quantidade de produtos e valor unitário. Calcule o preço final.

const prompt = require("prompt-sync") ();

let quantidadeDeProdutos = Number(prompt("Digite quantos produtos você vai levar: "));
let qualOValorUnitario = Number(prompt("Qual o valor Unitário dos itens?: "));

if (quantidadeDeProdutos == 1) {
    console.log(`Você comprou ${quantidadeDeProdutos} produto e o não tem desconto. O valor total ficou de R$${qualOValorUnitario}.`)
} else if (quantidadeDeProdutos >= 2 && quantidadeDeProdutos <= 4) {
    let valorTotalComDesconto = qualOValorUnitario - (qualOValorUnitario * 0.10);
    
    console.log(`Valor Total com 10% de Desconto: R$${valorTotalComDesconto}`);
} else {
    let valorTotalComDesconto = qualOValorUnitario - (qualOValorUnitario * 0.20);

    console.log(`Valor Total com 20% de Desconto: R$${valorTotalComDesconto}`);
}