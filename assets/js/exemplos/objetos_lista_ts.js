"use strict";
const PESSOA = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
PESSOA.idade = 29;
const ANDRE = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
};
const PAULA = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var EProfissiao;
(function (EProfissiao) {
    EProfissiao[EProfissiao["Professora"] = 0] = "Professora";
    EProfissiao[EProfissiao["Atriz"] = 1] = "Atriz";
    EProfissiao[EProfissiao["Desenvolvedora"] = 2] = "Desenvolvedora";
    EProfissiao[EProfissiao["Pintor"] = 3] = "Pintor";
    EProfissiao[EProfissiao["JogadorDeFutebol"] = 4] = "JogadorDeFutebol";
})(EProfissiao || (EProfissiao = {}));
const VANESSA = {
    nome: "Vanessa",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
};
const MARIA = {
    nome: "Maria",
    idade: 23,
    profissao: EProfissiao.Desenvolvedora
};
const JESSICA = {
    nome: "Jessica",
    idade: 21,
    profissao: EProfissiao.Desenvolvedora,
    materia: ['Matemática Discreta', 'Programação']
};
const MONICA = {
    nome: "Mônica",
    idade: 21,
    materia: ['Matemática Discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(MONICA.materia);
