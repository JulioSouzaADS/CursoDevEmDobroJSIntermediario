
// Array.slice (inicio[,fim])

let frutas = ['banana','maca','laranja','Uva']

// let frutasExtraidas =frutas.slice(1,3)
//     console.log ( frutasExtraidas)
//     console.log(frutas)

//    frutasExtraidas =  frutas.splice(1, 2)
//    console.log(frutasExtraidas)

let removeEAdicionaFrutas = frutas.splice(1,2, 'Goiaba ','Abacaxi','Péra')
console.log (frutas)
console.log (removeEAdicionaFrutas)