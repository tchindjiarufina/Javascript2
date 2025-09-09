// Indice de massa corporal

const peso = Number(prompt("Qual é o seu peso? em KG:"));
const altura = Number(prompt("Qual é a sua altura?:"));

//processamento
const imc = peso / (altura ** 2);

//saida

console.log(`IMC: ${imc.toFixed(2)}`)