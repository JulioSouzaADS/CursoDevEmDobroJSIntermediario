function alternarCorDoFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')
    console.log(posts)

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';

}

function aumentarFonteSegundoPost() {
    let textPosts = document.getElementsByClassName('texto-post');
    console.log(textPosts[1].classList)
    
    textPosts[1].classList.add('fonte-grande')

}

function MarcarRadio (genero){
    let radioMasculino =document.getElementById('genero-masculino');
    console.log(genero)
    let radioFeminino =document.getElementById('genero-feminino');

    if (genero === 'M') {
        radioMasculino.checked= true;
    }
    else {
        radioFeminino.checked =true
    }
}