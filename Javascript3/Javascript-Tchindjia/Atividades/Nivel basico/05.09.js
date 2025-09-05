const a = Number (prompt("Digite o primeiro numero:"))
const b = Number (prompt("Digite o segundo numero:"))
const c = Number (prompt("Digite o terceiro numero:"))

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
    alert("Numero inválido")

}else{
    let maior = a;

    if (b > maior){
        maior = b;

    }
    if (c > maior){
        maior = c;
    }
    alert("Omaior numero é:" + maior)
}