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

frutas.forEach( function (item,){
    console.log (item)
})
