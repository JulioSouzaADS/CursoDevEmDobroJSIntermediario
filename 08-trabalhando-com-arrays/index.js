// let frutas = [ 'banana' ,  'maça' , 'laranja', 'pêra'];
// let frutasTamanho = frutas.length;//utlizada para identificar a quantidade de itens deste array

// console.log (frutasTamanho)
// console.log (frutas[0])

// for (let i=0; i<frutasTamanho; i++ ){
//     console.log ('Frutas ' +frutas[i])
// }

// segunda forma de fazer o mesmo processo 


let frutas = [ 'banana' ,  'maça' , 'laranja', 'pêra'];
let frutasTamanho = frutas.length;//utlizada para identificar a quantidade de itens deste array

let posicaoLaranja = frutas.indexOf ('laranja')
console.log(posicaoLaranja)

frutas.push ('Manga') // metodo para adicionar um item na ultima posicao do array
console.log( frutas)

frutas.pop () // metodo para remover o ultimo elemento do array
console.log( frutas)

frutas.shift ('banana') // metodo que remove o primeiro elemento de índice zero
console.log( frutas)

frutas.unshift ('morango') // metodo que adiciona um elemento no primeiro elemento de índice zero
console.log( frutas)

frutas.forEach( function (item){
    console.log (item)

})

