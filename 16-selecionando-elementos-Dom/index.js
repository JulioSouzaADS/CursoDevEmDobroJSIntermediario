// console.log ( document)

let p = document.getElementById('paragrafo1')
console.log(p)

let inputPorClasse = document.getElementsByClassName ('tag-de-input')
console.log( inputPorClasse[0])

// vai pegar todos as classses tag-de-input

let inputPorTag = document.getElementsByTagName ('h1')
console.log ( inputPorTag)

// vai pegar todos as  tag definidas

let = inputPorNome = document.querySelectorAll("input[name='email']");
console.log(inputPorNome)

//consulta para elemento especifico
//pesquisa todos atributos input no qual exista oa atributo email