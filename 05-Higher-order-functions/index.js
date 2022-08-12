// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
//     const mesAtual = 2
//     let AnoDeNascimento = 2021 - idade
//     if (mesDeNascimento > mesAtual) AnoDeNascimento-- 
//     imprimir (AnoDeNascimento)
// }

// let imprimirAnoNascimento = AnoDeNascimento => {
//     console.log (' Seu ano de nascimento é ' + AnoDeNascimento)
// }
//     calcularAnoDeNascimento (33, 3, imprimirAnoNascimento)

// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
//     const mesAtual = 8 
//     let AnoDeNascimento = 2022 - idade
//     if (mesDeNascimento > mesAtual) AnoDeNascimento--
//     imprimir (AnoDeNascimento)
// }
//     let imprimirAnoNascimento = AnoDeNascimento => {
//         console.log ( ' ano De nascimento é ' + AnoDeNascimento)
//     }

//     calcularAnoDeNascimento (28, 7, imprimirAnoNascimento)

// function dobrar (numero) {
//     return numero * 2
// }

// function triplicar (numero) {
//     return numero * 3
// }

// function quadruplicar (numero) {
//     return numero * 4
// }
// console.log (triplicar(2)) // resultado 4

function multiplicar (multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar (2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar (4)

console.log (dobrar (3))
console.log (triplicar (3))
console.log (quadruplicar (3))