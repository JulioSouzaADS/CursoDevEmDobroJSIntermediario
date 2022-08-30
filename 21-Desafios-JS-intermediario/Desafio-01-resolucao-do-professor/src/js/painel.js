const imagens = document.querySelectorAll(".slide");
// console.log(imagens);
const setaVoltar = document.getElementById("seta-voltar");
// console.log(setaVoltar);
const setaAvancar = document.getElementById("seta-avancar");
// console.log(setaAvancar);
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {

    if (imagemAtual === imagens.length - 1) {
        return
    }

    //verifica o tamanho da lista de imagens e testa se sao igual caso positivo ita parar a execução

    esconderImagemAberta();

    imagemAtual++
    imagens[imagemAtual].classList.add("mostrar")

mostrarOuEsconderSetas();

});

setaVoltar.addEventListener("click", function () {

    if (imagemAtual === 0) {
        return;
    }

    //verifica o tamanho da lista de imagens e testa se sao igual caso positivo ita parar a execução

    esconderImagemAberta();

    imagemAtual--;
    imagens[imagemAtual].classList.add("mostrar")

mostrarOuEsconderSetas();

});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}
// ao clikar na seta remove a classe mostrar da classe atual

function mostrarOuEsconderSetas() {

    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");

    } else {
        setaAvancar.classList.remove("opacidade");
    }
    
}

