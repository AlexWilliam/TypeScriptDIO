"use strict";
let button = document.getElementById("button1");
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let devePrintar = true;
let frase = "O valor é: ";
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
button.addEventListener('click', () => {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
});
