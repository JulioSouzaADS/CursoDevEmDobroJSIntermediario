let jogo1 = {
    nome: 'Final Fantasy'
}

let jogo2 = {
    nome: 'Fallout'
}


let videoGame = {
    nome: 'xbox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

let jogo3 = {
    nome: 'Fifa'
}

videoGame.jogos.push(jogo3)
console.log(videoGame)


//Em algumas situações pode instanciar o objeto diretamente 

// let videoGame = {
//     nome: 'xbox',
//     valor: 3000,
//     jogos: [
//        {  nome :'Final Fantasy' },

//        {  nome:'Fallout' }
//     ]
// }


// let cliente = {
//     nome : 'Julio',
//     ultimoPedido: {
//         produto : 'Xbox',
//         valor : 3000 ,
//         jogos : [
//             { nome: 'Fifa'}
            
//         ]
//     }
// }

// console.log (cliente.ultimoPedido.jogos[0].nome)

let pessoa = {
    nome : 'julio',
    idade : 28,
    comidas : ['beiju','banana','arroz','macarrão']
 
}

console.log( pessoa.comidas[3])

pessoa.comidas.push ('WheyPreteyn')
console.log( pessoa.comidas)

