
const idade = Number(prompt("Digite sua idade:"));
if (Number.isNaN(idade) || idade < 0) {
    alert("idade invalída")
}
if (idade <= 12) {
    alert("Voce é uma criança.");
} 
else if (idade <= 13 || idade <= 17) {
    alert("voce é adolecente")
    
    
    }else if (idade >= 18){
        alert("Voce é adulto")
    }else{
        alert("voce é adulto")
    }
