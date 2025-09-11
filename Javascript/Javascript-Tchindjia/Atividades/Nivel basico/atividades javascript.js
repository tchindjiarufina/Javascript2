//Exercício 1: Filter
const arr = [10, 15, 20, 25, 30];

const maioresOuIguais = arr.filter(function(num) {
  return num >= 20;
});

console.log(maioresOuIguais); 



//Exercício 2: Map
const palavras = ["js", "html"];

const maiusculas = palavras.map(function(palavra) {
  return palavra.toUpperCase();
});

console.log(maiusculas);

//Exercício 3: Find
const usuarios = [
  { id: 1, nome: "A" },
  { id: 3, nome: "C" },
  { id: 2, nome: "B" }
];

const usuarioId3 = usuarios.find(function(usuario) {
  return usuario.id === 3;
});

console.log(usuarioId3);


//Exercício 4: Map + Filter
const produtos = [
  { nome: "X", preco: 10 },
  { nome: "Y", preco: 30 }
];

const nomesCaros = produtos
  .filter(function(produto) {
    return produto.preco > 20;
  })
  .map(function(produto) {
    return produto.nome;
  });


  //Exercício 5: Reduce – Somar preços
const itens = [{ preco: 10 }, { preco: 20 }, { preco: 5 }];

const total = itens.reduce(function(soma, item) {
  return soma + item.preco;
}, 0);

console.log(total); 

//Exercício 6: Reduce – Agrupar por categoria

const objetos = [
  { nome: "Caneta", categoria: "papel", preco: 3 },
  { nome: "Caderno", categoria: "papel", preco: 15 },
  { nome: "Banana", categoria: "alimento", preco: 2 },
];

const agrupado = objetos.reduce(function(resultado, objetos) {
  if (!resultado[objetos.categoria]) {
    resultado[objetos.categoria] = 0;
  }
  resultado[item.categoria] += objetos.preco;
  return resultado;
}, {});

console.log(agrupado);
