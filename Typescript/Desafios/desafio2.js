"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa5 = {
    nome: "Ronaldo",
    idade: 37,
};
