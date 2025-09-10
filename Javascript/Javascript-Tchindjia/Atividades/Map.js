const palavras = ["Java", "mundo", "javascript"];
const enfatizadas = palavras.map(palavra => palavra + "!!!");
console.log(enfatizadas); 

// ex2
const nomes = ["Lucas", "Beatriz", "Julia"];
const nomesMaiusculos = nomes.map(nomes => "colaborador(a) " + nomes)
console.log(nomesMaiusculos); 

// ex3
const pessoas = [
    { name: "Bruno", idade: 25 },
    { name: "Kaio", idade: 30 },
    { name: "Celeste", idade: 28 }
  ];
  const names = pessoas.map(pessoa => pessoa.name);
  console.log(names); 
  
  //ex4
  const raios = [8, 6, 2];
const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
console.log(areas); 

//ex5
const precos = [200, 34.5, 99.99, 4];
const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
console.log(precosFormatados); 

//ex5
const notas = [40, 2, 65, 82, 99];
const conceitos = notas.map(nota => {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  if (nota >= 60) return "D";
  return "F";
});
console.log(conceitos);

//ex6
const titulos = ["Gatos e chocolate", "Javascript e café", "Senai 2025"];
const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
console.log(slugs); 

//ex7
const produtos = [
    { id: 1, nome: "Celular", preco: 1999.99 },
    { id: 2, nome: "Notebook", preco: 3999.99 },
    { id: 3, nome: "Tablet", preco: 899.99 }
  ];
  
  const catalogo = produtos.map(function(produto) {
    return {
      nome: produto.nome,
      preco: "R$ " + produto.preco
    };
  });
  
  console.log(catalogo);
 
  