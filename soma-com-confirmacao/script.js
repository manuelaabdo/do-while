let soma = 0;
let resposta;

do {
    let numero = Number(prompt("Insira um número"))
    soma = soma + numero
    resposta = prompt("deseja inserir outro número? (s ou n)")

} while (resposta == "s")

alert(`A soma total dos números inseridos é ${soma}.`)
