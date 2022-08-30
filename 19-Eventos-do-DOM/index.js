// uma forma padrao de realizar a função

// let selectDeEstado = document.querySelector("select[name='estado']")
// console.log(selectDeEstado);

// para adicionar avento de change ou mudanã

// selectDeEstado.addEventListener('change',function (){
//     alert ('mudou o select')
// })




// uma forma resummido e identada de realizar o mesmo processo 

// document
// .querySelector("select[name='estado']")
// .addEventListener('change',function (){
//     alert ('mudou o select')
// })




// para pegar a mudanca que o usuario selecionou

document
.querySelector("select[name='estado']")
.addEventListener('change',function (event){
    console.log (event.target.value)
});
