let produtoRefrigerante = 11.99
let produtoMacarrao = 6.99
let produtoErvilha = 6.99
let produtoArroz = 22.99
let produtoFeijao = 11.89
let produtoVinho = 70

let quantidadeRefrigerante = 3
let quantidadeMacarrao = 4
let quantidadeErvilha = 3
let quantidadeArroz = 3
let quantidadeFeijao = 2
let quantidadeVinho = 3

let inicio = String(prompt(`Deseja alterar os produtos?
    Digite o número de uma opções a seguir:
        1 - Alterar valor e quantidade de um produto
        2 - Alterar valor e quantidade de todos os produtos
        3 - Ver resultado
    `))

if (inicio == 1) {
    alterarUmProduto = String(prompt(`Qual produto você deseja alterar?
    Digite o número de uma opções a seguir:
        1 - Refrigerante
        2 - Macarrão
        3 - Ervilha
        4 - Arroz
        5 - Feijão
        6 - Vinho
    `))
    if (alterarUmProduto == 1) {
        produtoRefrigerante = parseFloat(prompt("Digite o novo valor do refrigerante"))
        quantidadeRefrigerante = parseFloat(prompt("Digite a nova quantidade de refrigerante"))
    } else if (alterarUmProduto == 2) {
        produtoMacarrao = parseFloat(prompt("Digite o novo valor do macarrao"))
        quantidadeMacarrao = parseFloat(prompt("Digite a nova quantidade de macarrao"))
    } else if (alterarUmProduto == 3) {
        produtoErvilha = parseFloat(prompt("Digite o novo valor da ervilha"))
        quantidadeErvilha = parseFloat(prompt("Digite a nova quantidade de ervilha"))
    } else if (alterarUmProduto == 4) {
        produtoArroz = parseFloat(prompt("Digite o novo valor do arroz"))
        quantidadeArroz = parseFloat(prompt("Digite a nova quantidade de arroz"))
    } else if (alterarUmProduto == 5) {
        produtoFeijao = parseFloat(prompt("Digite o novo valor do feijao"))
        quantidadeFeijao = parseFloat(prompt("Digite a nova quantidade de feijao"))
    } else if (alterarUmProduto == 6) {
        produtoVinho = parseFloat(prompt("Digite o novo valor do vinho"))
        quantidadeVinho = parseFloat(prompt("Digite a nova quantidade de vinho"))
    }
} else if (inicio == 2) {
    produtoRefrigerante = parseFloat(prompt("Digite o novo valor do refrigerante"))
    quantidadeRefrigerante = parseFloat(prompt("Digite a nova quantidade de refrigerante"))
    produtoMacarrao = parseFloat(prompt("Digite o novo valor do macarrao"))
    quantidadeMacarrao = parseFloat(prompt("Digite a nova quantidade de macarrao"))
    produtoErvilha = parseFloat(prompt("Digite o novo valor da ervilha"))
    quantidadeErvilha = parseFloat(prompt("Digite a nova quantidade de ervilha"))
    produtoArroz = parseFloat(prompt("Digite o novo valor do arroz"))
    quantidadeArroz = parseFloat(prompt("Digite a nova quantidade de arroz"))
    produtoFeijao = parseFloat(prompt("Digite o novo valor do feijao"))
    quantidadeFeijao = parseFloat(prompt("Digite a nova quantidade de feijao"))
    produtoVinho = parseFloat(prompt("Digite o novo valor do vinho"))
    quantidadeVinho = parseFloat(prompt("Digite a nova quantidade de vinho"))

}

let total = (produtoRefrigerante * quantidadeRefrigerante) + (produtoMacarrao * quantidadeMacarrao) + (produtoErvilha * quantidadeErvilha) + (produtoArroz * quantidadeArroz) + (produtoFeijao * quantidadeFeijao) + (produtoVinho * quantidadeVinho)
let casoParVoce = ((total - (produtoVinho * quantidadeVinho)) / 2).toFixed(2)
let casoParAmigo = (total - casoParVoce).toFixed(2)
let casoImpar = (total / 2).toFixed(2)

if (total % 2 == 0) {
    console.log(`Você pagará R$${casoParVoce} e seu amigo pagará R$${casoParAmigo}`)
    alert(`Você pagará R$${casoParVoce} e seu amigo pagará R$${casoParAmigo}`)
} else {
    console.log(`Cada um deve pagar o valor R$${casoImpar}`)
    alert(`Cada um deve pagar o valor R$${casoImpar}`)
}