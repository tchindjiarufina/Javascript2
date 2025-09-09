const idade = Number(prompt("Sua idade"));
if (Number.isNaN(idade) || idade < 0) {
    console.log("idade invalída")
    
} else {
    if (idade >=18) {
      console.log("Maior de idade");        
    } else{
        console.log("você não é maior de idade.")
    }
    
}