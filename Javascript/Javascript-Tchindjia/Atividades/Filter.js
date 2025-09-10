const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomes.find(nome => nome === "Amanda");
console.log(amanda); 

//ex2
const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez); 

//ex3
const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  
  const produtosBaratos = produtos.filter(produto => produto.preco < 50);
  console.log(produtosBaratos); 
   
  //ex4
  const pessoas = [
    { nome: "Carlos", idade: 17 },
    { nome: "Mariana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Fernanda", idade: 30 }
  ];
  
  const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
  console.log(maioresDeIdade); 

  //ex5
  const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];
const palavrasLongas = palavras.filter(palavra => palavra.length > 6);
console.log(palavrasLongas); 

//ex6
const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Beatriz", ativo: true },
    { nome: "João", ativo: false }
  ];
  
  const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
  console.log(usuariosAtivos); 
  
  //ex7
  const pedidos = [
    { id: 1, status: "pendente" },
    { id: 2, status: "entregue" },
    { id: 3, status: "cancelado" },
    { id: 4, status: "entregue" }
  ];
  
  const pedidosEntregues = pedidos.filter(pedido => pedido.status === "entregue");
  console.log(pedidosEntregues); 
  
  //ex8
  const alunos = [
    { nome: "Paula", nota: 8 },
    { nome: "Miguel", nota: 5 },
    { nome: "Camila", nota: 9 },
    { nome: "Lucas", nota: 6 }
  ];
  
  const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
  console.log(alunosAprovados); 
 
  //ex9
  const products = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];

const produtosCaros = products.filter(produto => produto.preco > 500);
const mouse = products.find(produto => produto.nome === "Mouse");
const nomesProdutos = products.map(produto => produto.nome);
const totalPreco = products.reduce((soma, produto) => soma + produto.preco, 0);

console.log(produtosCaros); 
console.log(mouse); 
console.log(nomesProdutos); 
console.log(totalPreco); 

  
  
  