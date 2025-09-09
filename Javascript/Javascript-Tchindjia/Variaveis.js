let nome = "Tchindjia"; //variável que armazena uma String
const idade = 17; // Variável que armazena um numero
var cidade = "São Paulo"; // Variável que armazena uma String

// (const) = Variável que não é possível mudar o valor no meio do código
//

// (var) = Variável que é possível mudar o valor dela no meio do código
//

// (let) = Mais atualizado por conta que que o (var) vai ser discontinuado 


//Mostrar a variável nome no terminal
console.log(nome);


//Mostrar uma frase com todas as variáveis 
console.log(" O meu nome é " + nome + ",eu tenho " + idade + "anos" + " e nasci na cidade de " + cidade );
console.log(`O meu nome é ${nome}, eu tenho ${idade} anos e eu nasci em ${cidade}`);

//O let é usado em variável booleana porque pode ser mudado 
let estachovendo = false; // variavel Booleana que indica que esta falso o valor
let tanublado = true; // variavel Booleana que indica que esta verdadeiro o valor

//variaveis sem valor (ou Undefined)
let marca;
console.log(marca);

//variavel Null (nula)
let endereco = null;

//tipo primitivo da variavel
//typeof
console.log(typeof nome);