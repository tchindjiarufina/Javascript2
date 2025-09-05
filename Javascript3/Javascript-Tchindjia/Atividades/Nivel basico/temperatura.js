const temp= Number(prompt("temperatura atual (c): "));

if(Number.isNaN(tempo)){
    console.log("valor invalido");

} else if (temp < 0){
    console.log("Muito frio")
} else if (temp <= 20){
    console.log("Frio")

} else if (temp <= 30){
    console.log("Agradavel")

}else{
    console.log("Muito Quente");
}