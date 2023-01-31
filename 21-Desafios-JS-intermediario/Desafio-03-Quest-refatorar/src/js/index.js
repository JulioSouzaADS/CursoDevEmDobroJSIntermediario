let dadosUsuario = { nome :'', email : '', telefone : 0, mensagem:''}
const inputDados = document.querySelectorAll('.inputDados')
let error = document.querySelectorAll ('.error')
const btnEnviar = window.document.querySelector ("#enviar");

btnEnviar.addEventListener ('click', function(botaoEnviar){
    botaoEnviar.preventDefault();
    dadosInformados();
    validaFormulario(dadosUsuario);
})

function dadosInformados () {
    dadosUsuario.nome = document.querySelector ("#name").value
    dadosUsuario.email = emailUsuario = document.querySelector ("#email").value
    dadosUsuario.telefone = telefoneusuario =document.querySelector ("#telefone").value
    dadosUsuario.mensagem = textoUsuario =document.querySelector ("#mensagem").value
    // console.table (dadosUsuario)
}


// essa ta funcionando 100%
function validaFormulario () {

    Object.keys(dadosUsuario).forEach(function(dados,indice,array){
        console.log (dadosUsuario[dados])

        if (dadosUsuario[dados] === '' || dadosUsuario[dados] === 0) {
            inputDados[indice].style.borderColor = 'red';
            error[indice].style.color = 'red';
        } else {
            inputDados[indice].style.borderColor = '#3CCC87';
            error[indice].style.color = 'white';
        }   

    })
}

