let dadosUsuario = { nome :'', email : '', telefone : 0, mensagem:''}
let formularioOk = document.getElementsByTagName ('form')
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
}

function validaFormulario () {
    let dadosRecebidosNome = document.querySelector ("#name");
    let dadosRecebidosEmail = emailUsuario = document.querySelector ("#email")
    let dadosRecebidosTelefone = document.querySelector ("#telefone")
    let dadosRecebidosMensagem = document.querySelector ("#mensagem")
    let errorNome =document.querySelector ('#ErrorNome')
    let errorEmail =document.querySelector ('#ErrorEmail')
    let errorTel =document.querySelector ('#ErrorTel')
    let errorMsg =document.querySelector ('#ErrorMsg')
        if (dadosUsuario.nome === '') {
        alert ('atenção o campo nome é obrigatorio')
        dadosRecebidosNome.style.borderColor = 'red';
        errorNome.style.color = 'red'

        } 
            else if  (dadosUsuario.email === '' ) {
                alert  ('atenção o campo Email é obrigatorio')
                // dadosRecebidosEmail.classList.add('.erro')
                dadosRecebidosEmail.style.borderColor = 'red';
                errorEmail.style.color = 'red'
    
            } else if (dadosUsuario.telefone === '' ) {
                alert  ('atenção o campo telefone é obrigatorio')
                // dadosRecebidosTelefone.classList.add('.erro')
                dadosRecebidosTelefone.style.borderColor = 'red';
                errorTel.style.color = 'red'
    
            } else if (dadosUsuario.mensagem === '' ) {
                    alert ('atenção o campo Mensagem é obrigatorio')
                    // dadosRecebidosMensagem.classList.add('.erro')
                    dadosRecebidosMensagem.style.borderColor = 'red';
                    errorMsg.style.color = 'red'
                    formularioOk.style.BackgroundColor = 'red' ;
            } else {
                    dadosRecebidosNome.style.borderColor = '#3CCC87';
                    dadosRecebidosEmail.style.borderColor = '#3CCC87';
                    dadosRecebidosTelefone.style.borderColor = '#3CCC87';
                    dadosRecebidosMensagem.style.borderColor = '#3CCC87';
            } 
                console.table (dadosUsuario)
    }

