"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = true;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 222;
let stringTeste = "Teste";
stringTeste = anyEstaDeVolta;
let unknownValue;
unknownValue = true;
unknownValue = 'teste';
unknownValue = 222;
let stringTeste2 = "Teste";
// stringTeste2 = unknownValue; // Este não funciona
if (typeof unknownValue === 'string') {
    stringTeste2 = unknownValue; // Desta forma funciona
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("Deu Erro", 500);
