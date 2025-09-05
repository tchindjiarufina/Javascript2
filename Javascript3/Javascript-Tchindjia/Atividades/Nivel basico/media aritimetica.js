const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3);
const resultado = (media/3);

console.log(`A media é ${media.toFixed(1)}`);