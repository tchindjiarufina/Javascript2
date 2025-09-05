// Operadores relacionais 

// > (maior que)
// < (menor que)
// >= (maior ou igual)
// <= (Menor ou igual)
// == (igualdade, sem verificar o tipo)
// ===(igualdade escrita, verifica o tipo)
// != (diferente)
// ! == (diferente escrito, verfica o tipo)

let number = "21";
if(number == 21){
    console.log("ok");
}

let bool = "true";

if(bool === true){
    console.log("sim entrou no if");
}

//--------------------------------------------
 let variavel1 = "2"
 let variavel = "4"
 let bool2 = false

 if(variavel1 == 3){
    console.log(`A varivel tem esse valor`);
}else{
    console.log(`A variavel1 não tem esse valor`);
}

// condicional alinhada
if(variavel1 == 2){
if(variavel2 == 4){
    console.log("A variavel2 nao tem esse valor");

}else{
    console.log ("variavel2 nao tem esse valor");

}
}else{
console.log("A variavel não tem esse valor");
}


//condicional (diferente)

console.log(1 !='1'); //false (valores iguais)
console.log(1 !=='1'); // truee (valores diferentes)
