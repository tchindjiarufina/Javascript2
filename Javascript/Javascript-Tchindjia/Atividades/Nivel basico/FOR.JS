//For contagens

//Estrutura: for (inicio; condição; incremento)

for (let i = 1; i <= 10; i++){
 console.log(`7 x ${i} = ${7 * i}`)
}

//for..of
const frutas = ["Maçã", "Banana", "Laranja",];

for (const frutas of frutas ){
    console.log("Fruta", fruta);
}

//For...in

const pessoa = {nome:"Tchindjia", idade: 17, cidade: "São Bernardo"}
for (const chave in pessoa){
    console.log(`${chave}:${pessoa[chave]}`)
}