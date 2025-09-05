//while

let i = 1;

while (i <= 5) {
    console.log("Número:", i);
    i++;
    
}

//do...while

let senha;
let tentativas = 0;
const senhacorreta = 123
do{
   senha = prompt("Digite a sua senha:");
   tentativas++;
   if (senha === senhacorreta){
    alert("Acesso Liberado!")
    break;
   }

   if (tentativas >= 3){
    alert("Número máximo de tentativas atingidas. Acesso bloqueado!")
    break;
   }
} while (true);

//Laço externo: percorre os números de 1 a 9
let limite =Number(prompt("Digite até qual numero deseja ver a tabuada:"));
for (let numero = 1; numero <= 9; numero++){
    console.log(`----Tabuada do ${numero}---`);
    for(let i = 1; i<= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)

    }
    console.log("\n")
}