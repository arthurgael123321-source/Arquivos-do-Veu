
let paginaAtributos = document.getElementById("pagina-atributos");

let paginaOrigem = document.getElementById("pagina-origem");

let detalhesCards = document.querySelectorAll("div.card-origem");

let botaoAtributos = document.getElementById("botao-atributos");

let botaoClasses = document.getElementById("botao-classes");

let paginaClasses = document.getElementById("pagina-classes");

let botaoOrigem = document.getElementById("botao-origem");

let CardsHabilidadescombatente = document.querySelectorAll("div.card-explicativos-habilidades-combatente");


botaoAtributos.addEventListener("click", function (){

    paginaOrigem.style.display = "none"
    paginaAtributos.style.display = "flex"
    paginaClasses.style.display = "none"    

});


botaoOrigem.addEventListener("click", function (){

    paginaAtributos.style.display = "none"
    paginaOrigem.style.display = "flex"
    paginaClasses.style.display = "none"

});

botaoClasses.addEventListener("click", function() {
    paginaClasses.style.display = "flex"
    paginaAtributos.style.display = "none"
    paginaOrigem.style.display = "none"
});


detalhesCards.forEach(function(card){
    card.addEventListener("click", function(){
        card.classList.toggle("aberto")

    })
});

CardsHabilidadescombatente.forEach(function(card){
    card.addEventListener("click", function(){
        card.classList.toggle("aberto")

    })
});
    




