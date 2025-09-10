//Dados fixos
//aqui temos uma lista de filmes e series com:
//titulo
//imagem
//generos (array de strings)

const Dados = {
    Filmes: [
        {titulo: "É Assim Que Acaba", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Drama" , "Romance"]},
        {titulo: "Bad Boys: Para Sempre", Imagem: "../projeto-SENAIFLIX -/assets/imgs/badboys.webp" , genero: ["Ação" , "Comédia"]},
        {titulo: "Um Lugar Silencioso: Dia Um", Imagem: "projeto-SENAIFLIX -/assets/imgs/umlugarsilencioso.webp" , genero: ["Ficção" , "Terror", "Mistério"]},
        {titulo: "Venom", Imagem: "../projeto-SENAIFLIX -/assets/imgs/venom.webp" , genero: ["Ação" , "Ficção"]},
        {titulo: "Deadpool & Wolverine", Imagem: "projeto-SENAIFLIX -/assets/imgs/deadpoolewolverine.webp" , genero: ["Ação" , "Comédia", "Ficção"]},
        {titulo: "Divertida Mente 2", Imagem: "projeto-SENAIFLIX -/assets/imgs/divertidamente.webp" , genero: ["Ficção" , "Animação", "Aventura" , "Comédia"]},
    ],
    Series:[
        {titulo: "Guerra dos Tronos", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Ficção" , "Aventura", "Ação" ,"Fantasia"]},
        {titulo: "Sobrenatural", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Ficção" , "Terror", "Mistério" ,"Drama", "Thriller"]},
        {titulo: "Grey's Anatomy", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Drama" , "Romance"]},
        {titulo: "Prison Break", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Ação" , "Drama", "Mistério" ,"Crime"]},
        {titulo: "O Senhor dos Anéis: Os Anéis do Poder", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Ficção" , "Aventura", "Sci-Fi & Fantasia"]},
        {titulo: "O Segredo do Rio", Imagem: "../projeto-SENAIFLIX -/assets/imgs/eassimqueacaba.webp" , genero: ["Drama", "Mistério"]},

    
    ]
};

//Seletores do DOM
//Seleciona os cards dos filmes e series no HTML
const filmesCards = document.querySelectorAl ("#filmes-container a");
const seriesCards = document.querySelectorAl ("#series-container a");

//Selecionar o filtro de genero e o botão "limpar filtro"
const selectGenero = document.getElementById("genero");
const btnLimpar = document.getElementById("limpar-filtro");

//Renderização dos cards
document.addEventListener("DOMContentLoaded" , function () {
    //cards List dos <a> do HTML cada card
    //lista array de dados filmes e series
    //filtro Genero selecionado ex. Ação ou todos
    function renderizar(cards, lista, filtro = "todos") {
        cards.forEach(cards, index => {
            const item = lista[index] // pega o item na mesma posição do array
            const genero = item && item.genero;

            //Verifica se o item corresponde ao filtro escolhido
            const correspondefiltro = filtro === "todos" || (genero && genero.includes(filtro));
            if (item && correspondefiltro) {
                //Se passar no filtro -> mostra o card e aplica a imagem de fundo
                cards.style.display = "block";
                cards.style.backgroundImage = `ur(${item.imagem})`;
                cards.style.backgroundSize = "cover";
                cards.style.backgroundPosition = "center"
                
            } else {
                //caso contrario -> esconde o card
                cards.style.display = "none";
                
            }
            
        });
    }
//função aplicarFiltro()
//atualiza a exibição de filmes e series com base no genero selecionado
      function aplicarFiltro(generoSelecionado){
        renderizar(filmesCards, dados.filmes, generoSelecionado)
        renderizar(seriesCards, dados.series, generoSelecionado)
      }
    
      //Quando o usuario troca o genero no <select>
      if (selectGenero) {
        selectGenero.addEventListener("change", function(){
            aplicarFiltro(this.valule); //pega o valor selecionado
        });
        
      }

      //Quando clicar no botão limpar
      if(btnLimpar){
        btnLimpar.addEventListener("click", function(){
            selectGenero.selectedIndex = 0; // volta para "Todos"
            aplicarFiltro("todos")// mostra todos novamente
        })
      }
      //exibe todos os itens logo no inicio
      aplicarFiltro("Todos");
    
});

//Pesquisa por texto
const inputPesquisar = document.getElementById("pesquisar");
if (inputPesquisar){
    inputPesquisar.addEventListener("input", function(){
        const titulo = dados.filmes[index].titulo.toLowerCase();
        card.style.display = titulo.includes(palavraDigitada) ? "block" : "none";
    });

    //Se está pesquisando por texto, o filtro de genero volta para "Todos"
    if(selectGenero) selectGenero.selectedIndex = 0;
}

//Menu Mobile
const btnMenu = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

if (btnMenu && menuMobile){
    btnMenu.addEventListener("click" , () => {
        //Alterar a exibição do menu (abre e fecha)
        menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
    })
}