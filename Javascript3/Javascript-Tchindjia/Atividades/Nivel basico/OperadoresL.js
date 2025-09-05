//Operadores Logicos &&(E), || (OU), !(NÃO)

const dinheiro = Number(prompt("Dinheiro na carteira:"));
const temCartao = prompt("Tem cartão? (s/n)") === "s"

if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
    console.log("Você consegue comprar o lanche.")
    
} else {
    console.log("Não vai rolar agora!")

}


//Negação
const logado= true;
if(!logado){
    console.log("Faça login")

}


//Operadores térnarios cond ? x : y

//condição ? valorServerdadeiro : valorSeFalso

const idade = Number(prompt("Digite sua idade:"));
const tipo = idade >= 18 ? "maior de idade" : "Menor de idade"

let tipo2;
if (idade >= 18) {
    tipo2 = "maior de idade"

    
} else {
    tipo2 = "menor de idade"
    
}

const n = Number(prompt("Digite um numero:"));
const tipo3 = n > 0 ? "positivo" : (n < 0 ? "negativo" : "zero")

//exemplo 3
//Nota (aprovado ou reprovado)

const nota2 = Number(prompt("Digite a nota"));
const tipo1 = nota2 > 5 ? "Aprovado" : "Reprovado"

//exemplo 4
const a = 10, b=20;
console.log(a > b ? "a maior" : "b é maior ou igual")
