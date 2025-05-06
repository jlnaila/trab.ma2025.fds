const botão = document.getElementById("botao");
const boasVindas = document.getElementById("mensagem");

botão.addEventListener("click", novoTexto);
function novoTexto() {
    boasVindas.innerHTML= "<p>Seja bem vindo(a)!</p>"
};

