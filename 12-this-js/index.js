'use strict'
// console.log (window)
// console.log ( window === this)

// this.name = 'Julio'
// function saudar () {
//     // console.log ('this no contexto da função' , this)
//     console.log ('ola ' + this.name)
// }
// saudar()

// let usuario = {
//     nome : 'Julio',
//     saudar : function (){
//         console.log('This no Contexto do metodo ',this)
//         console.log ('This.name no Contexto do metodo ', this.nome)
//     }
// }
// usuario.saudar ()

let comida = {
    nome: 'Brocolis',
    temperatura :0
}

comida.cozinhar = function(temperaturaDeCozimento) {
   this.temperatura = temperaturaDeCozimento;
}

console.log (comida)
comida.cozinhar (comida ,150)
console.log (comida)