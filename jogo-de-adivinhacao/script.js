let numeroSecreto;
let contador = 0;

do {
    numeroSecreto = prompt("Tente adivinhar o número secreto (entre 1 e 10):")
    contador++

} while ( numeroSecreto != "7")

alert(`Parabéns, você adivinhou o número secreto!
A quantidade de tentativas foi: ${contador}`)
