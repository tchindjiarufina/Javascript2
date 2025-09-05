const nota = Number(prompt("Digite a nota: "));

if(Number.isNaN(nota)|| nota < 0 || nota > 100){
    console.log("valor invalido")
}

 else if (nota <= 60) {
    console.log("Reprovado")
    
    
    }else if (nota < 80 ){
        console.log("Recuperação")
    }else{
        console.log("Aprovado")
    }
