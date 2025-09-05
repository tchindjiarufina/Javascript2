console.log("Bem vindo ao sistema de notas!");
const prompt = require("prompt-sync")();
let nota = prompt ("Digite a nota desejada:");


if(nota >= 60){
    console.log("Aprovado!");
}else{
    console.log("Reprovado!");
}