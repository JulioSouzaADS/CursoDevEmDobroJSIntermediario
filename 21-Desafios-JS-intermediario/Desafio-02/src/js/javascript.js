
// essa parte funciona apenas o 1 paragrafo pois nao tem como fazer um contador para os outros

// let setas = document.querySelectorAll('.seta')
// let paragrafoOculto = document.querySelector('.opacidade')
// let ParagrafosArray = document.querySelectorAll('p')
// console.log(paragrafoOculto)
// console.log(ParagrafosArray)


// posicaoArray = 0

// console.log (posicaoArray)

// posicaoSeta = [posicaoArray]

// console.log(posicaoSeta)


// setas[posicaoArray].addEventListener("click", function () {

//         ocultarParagrafo();
// });


// function ocultarParagrafo(){

//         paragrafoOculto.classList.remove("opacidade");
//         // paragrafoEstilizado.classList.add (mostrar = 'red';)
// }

function perguntasFrequentesUm () {

        let perguntas = document.querySelectorAll ('.pergunta-faq')
        let seta = document.querySelectorAll('.seta')
        let mostrarDados = document.querySelector('.opacidade')
        
                console.log (perguntas)
                console.log(seta)
                console.log (mostrarDados)
        
          
                        perguntas[0].addEventListener ("click",function() {
                                mostrarInformacoes();
                        });

                        seta[1].addEventListener ("click",function() {
                                mostrarInformacoes();
                        });


                        function mostrarInformacoes(){
                                mostrarDados.classList.remove("opacidade")
                         }

}

         perguntasFrequentesUm();

  