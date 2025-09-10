const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomes.find(nome => nome == "Amanda");
console.log(amanda); 

//ex2
const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
  ];
  
  const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  
  console.log(usuarioEncontrado); 
  
  //ex3

  const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  
  const produtoBuscado = produtos.find(function(produto) {
    return produto.nome === "Fone de ouvido";
  });
  
  console.log(produtoBuscado);
  
  //ex4

  const pessoas = [
    { nome: "Carlos", idade: 17 },
    { nome: "Mariana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Fernanda", idade: 30 }
  ];
  
  const maiorDeIdade = pessoas.find(function(pessoa) {
    return pessoa.idade >= 18;
  });
  
  console.log(maiorDeIdade);
 
 // ex5
const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];

const palavraLonga = palavras.find(function(palavra) {
  return palavra.length > 3;
});

console.log(palavraLonga);

//ex6
const usuarios = [
    { nome: "Carlos", ativo: false },
    { nome: "Ana", ativo: true },
    { nome: "Beatriz", ativo: false},
    { nome: "João", ativo: false }
  ];
  
  const usuarioAtivo = usuarios.find(function(usuario) {
    return usuario.ativo === true;
  });
  
  console.log(usuarioAtivo);

  //ex7
  const pedidos = [
    { id: 1, status: "pendente" },
    { id: 2, status: "entregue" },
    { id: 3, status: "cancelado" },
    { id: 4, status: "cancelado" }
  ];
  
  const pedidoEntregue = pedidos.find(function(pedido) {
    return pedido.status === "entregue";
  });
  
  console.log(pedidoEntregue);
 
  //ex8
  const alunos = [
    { nome: "Miguel", nota: 5 },
    { nome: "Paula", nota: 8 },
    { nome: "Camila", nota: 9 },
    { nome: "Lucas", nota: 6 }
  ];
  
  const alunoAprovado = alunos.find(function(aluno) {
    return aluno.nota >= 7;
  });
  
  console.log(alunoAprovado);
  
  
  
  

  
  
  