function adicionarComentario () {
    let inputComentario = document.getElementsByName ('novo-comentario');

    let = textoDigitado = inputComentario [0].value;
    console.log(textoDigitado)
   
    let novosComentarios = document.getElementById('novos-comentarios');
 
    novosComentarios.innerHTML += `<p> Novo Comentario: ${textoDigitado} </p> ` 
    
    //    novosComentarios.innerHTML = ' qaqa'
  
}


