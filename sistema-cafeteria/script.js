let totalPedido = 0;
let opcao;

do {
    opcao = Number(prompt(`---- MENU ---- 
1 - Café Espresso (R$5,00)
2 - Capuccino (R$7,00)
3 - Pão de Queijo (R$4,00) 
0 - Encerrar pedido
(Digite 1, 2, 3 ou 0):`))
    
    if (opcao === 1) {
        totalPedido = totalPedido + 5
        alert("Café Espresso adicionado ao pedido!");
    } else if (opcao === 2) {
        totalPedido = totalPedido + 7
        alert("Capuccino adicionado ao Pedido!")
    } else if (opcao === 3) {
        totalPedido = totalPedido + 4
        alert("Pão de Queijo adicionado ao pedido!")
    } else if (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 0) {
        alert("Opção inválida!")
    }

} while (opcao != 0);

alert(`O total do pedido é: R$${totalPedido.toFixed(2)}.`)
