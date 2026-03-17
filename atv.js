// Atividade 1

// let caderno = 12.50
// let quantidade = prompt('Qual a quantidade de cadernos que você deseja comprar?')

// alert('o total a ser pago é R$' + caderno * quantidade )

// Atividade 2

// let camisa_fabrica = 25.00
// let camisa_loja = 40.00
// let quantidade = prompt('Quantas camisas foram vendidas?')

// let total = camisa_loja * quantidade
// let lucro = total - (camisa_fabrica * quantidade)

// alert('O total de lucro é R$' + lucro)

// Atividade 3

// let preco_original = prompt('Qual o preço do produto?')

// let preco_desconto = preco_original * 0.90

// alert('O preço do produto com desconto é R$' + preco_desconto)v]

// exercicio 4

// let meses = prompt("Insira o valor de meses")

// let juros = 0.05

// let emprestimo = 1000

// let juros_acumulados = 0

// juros_acumulados = emprestimo * juros

// juros_acumulados *= meses

// console.log("juros acumulados: "+ juros_acumulados)
// let resultado = Number(emprestimo) + Number(juros_acumulados)
// console.log("Valor a pagar no final: "+ resultado);

// exercicio 5

// let valor_vendas = Number(prompt("insira o valor total das vendas realizadas no mês"))

// let comissao = 0.05

// let resultado =  valor_vendas * comissao;

// console.log("Valor total das vendas realizadas: " + valor_vendas)

// console.log("Valor total da comissao: " + resultado)

// exercicio 6
// let valor_diario = 0
// for (let index = 1; index <= 7; index++) {
//     valor_diario += Number(prompt("Insira o valor vendido hoje..!!"))
// }
// console.log("Venda dessa semana:" + valor_diario);
// console.log("Venda media dessa semana:" + (valor_diario / 7).toFixed(2));

//Atividade 7
// let estoque = 120;
// let total_vendido = Number(prompt('Quanto você vendeu hoje?'));
// let total_estoque = estoque - total_vendido;

// if (total_vendido > total_estoque) {
//     alert("erro ao verificar (estoque) - (total_vendido)")
// }
// else{
//     alert('Estoque restante : ' + total_estoque);
// };

//Atividade 8
// let preco_atual = Number(prompt("Valor do produto :"));
// let preco_novo = preco_atual * 1.15;
// let diferença_valor = preco_novo - preco_atual;

// alert("Valores após reajuste :" + preco_atual + preco_novo + diferença_valor);

//Atividade 9
// let valor_compra = number(prompt("Valor da compra :"));
// let valor_parcela = valor_compra / parcela;
// let parcela = number(prompt("Parcelar em quantas vezes :"));

// alert("Valor final :" + valor_compra + parcela + valor_parcela);



// Atividade 10

// let investimento_inicial = prompt('Qual o valor do investimento inicial?')
// let meses = prompt('Quantos meses o dinheiro ficará investido?')

// let valor_final = investimento_inicial * (1 + 0.02) ** meses

// alert('O valor final do investimento é R$' + valor_final.toFixed(2))