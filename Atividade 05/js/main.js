let botao = document.querySelector(".menu");
let menuOpcoes = document.querySelector(".dropdown-content-mobile");

botao.addEventListener("click", function(){
    menuOpcoes.classList.toggle("dropdown-content-mobile");
});

function mostrarConteudo(){
    menuOpcoes.classList.toggle("dropdown-content-mobile");
}
menuOpcoes.addEventListener("click", mostrarConteudo);
