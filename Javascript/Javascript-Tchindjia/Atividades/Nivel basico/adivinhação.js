let secreto = Math.floor(Math.random() * 100) + 1;

let tentativas;

while(tentativas !== secreto){
    tentativas = Number(prompt("Adivinhe o número de 1 e 100:"))
    if (tentativas > secreto){
        alert("Tente um numero menor!")
    } else if (tentativas < secreto){
        alert("Tente um número maior!")

    } else {
        alert("Parabens, voce acertou!!!!")
    }
}