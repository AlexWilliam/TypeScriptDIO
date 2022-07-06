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
enum EProfissiao {
    Atriz,
    Padeiro
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: EProfissiao
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: EProfissiao.Atriz
};

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: EProfissiao.Padeiro
}

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: EProfissiao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissiao.Padeiro
}