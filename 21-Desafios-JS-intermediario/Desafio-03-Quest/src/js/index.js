let dadosUsuario = { nome :'', email : '', telefone : 0, mensagem:''}

const btnEnviar = window.document.querySelector ("#enviar");

btnEnviar.addEventListener ('click', function(botaoEnviar){
    botaoEnviar.preventDefault();
    dadosInformados();
    validaFormulario(dadosUsuario);

})

function dadosInformados () {
    const name =document.querySelector ("#name");
    const nome =name.value;
    dadosUsuario.nome = nome
   
    const emailUsuario = document.querySelector ("#email");
    const email =emailUsuario.value;
    dadosUsuario.email = email
  
    const telefoneusuario =document.querySelector ("#telefone");
    const telefone =telefoneusuario.value;
     dadosUsuario.telefone = telefone

    const textoUsuario =document.querySelector ("#mensagem");
    const textoDigitado =textoUsuario.value;
    dadosUsuario.mensagem = textoDigitado
    console.log (dadosUsuario);
}

function validaFormulario () {
    if (dadosUsuario.nome === '') {
        alert ('atenção o campo nome é obrigatorio')
        nome.classList.add('.erro')
        
    }  if  (dadosUsuario.email === '' ) {
        alert ('atenção o campo Email é obrigatorio')
        emailUsuario.classList.add('.erro')
    }  if (dadosUsuario.telefone === '' ) {
        alert ('atenção o campo telefone é obrigatorio')
        telefoneusuario.classList.add('.erro')
    }  if(dadosUsuario.mensagem === '' ) {
        alert('atenção o campo Mensagem é obrigatorio')
        textoUsuario.classList.add('.erro')
    } else {
        console.log ( 'formulario valido')

    }
}