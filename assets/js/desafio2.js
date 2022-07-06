"use strict";
/*
* Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
// Resolução
var EProfissiao;
(function (EProfissiao) {
    EProfissiao[EProfissiao["Atriz"] = 0] = "Atriz";
    EProfissiao[EProfissiao["Padeiro"] = 1] = "Padeiro";
})(EProfissiao || (EProfissiao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: EProfissiao.Atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: EProfissiao.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: EProfissiao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissiao.Padeiro
};
//# sourceMappingURL=desafio2.js.map