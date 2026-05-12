let nomeProduto;

do {
    nomeProduto = prompt("Insira o nome do produto a ser cadastrado:");
    if (nomeProduto.length < 3) {
        alert("Nome inválido! O nome do produto deve ter pelo menos 3 caracteres.");
    }

} while (nomeProduto.length < 3);

alert(`O produto "${nomeProduto}" foi cadastrado com sucesso.`)
