const reais = prompt ("Conversor BLR. digite usando vírgula");
const dolarRate = Number(prompt("cotação do dólar:"));

const brl = Number(reais.replace ("," , "."));
const usd = reais / dolarRate;

console.log(`R$ ${brl.toFixed(2)} US$ ${usd.toFixed(2)}=`)