let alterarCorPrimeiraDiv = document.getElementById ('quadro')
let alterarCorSegundaDiv = document.getElementById ('quadro-2')

let btn = document.querySelector ('.button')
console.log (btn)


btn.addEventListener ('click',(function() {
    AlterarBackgroundColor();
}

)) 

function AlterarBackgroundColor () {
    alterarCorPrimeiraDiv.style.backgroundColor = 'yellow'
}