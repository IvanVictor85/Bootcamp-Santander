"use strict";
/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John";*/
/* Explicita os tipos para melhor entendimento do código*/
let employee = {
    code: 10,
    name: "John"
};
/* inferindo tipos*/
let employee2;
let employee3 = {
    code: 30,
    name: "Ivan",
    profissao: "desenvolvedor"
};
