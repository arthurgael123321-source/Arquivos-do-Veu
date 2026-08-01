
let paginaAtributos = document.getElementById("pagina-atributos");
let paginaOrigem = document.getElementById("pagina-origem");

let botaoAtributos = document.getElementById("botao-atributos");

botaoAtributos.addEventListener("click", function (){

    paginaOrigem.style.display = "none"
    paginaAtributos.style.display = "flex"

});

let botaoOrigem = document.getElementById("botao-origem");

botaoOrigem.addEventListener("click", function (){

    paginaAtributos.style.display = "none"
    paginaOrigem.style.display = "flex"

});


