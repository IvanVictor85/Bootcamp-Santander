/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

/* Explicita os tipos para melhor entendimento do código*/
let employee: {code: number, name: string} = { 
    code: 10,
    name: "John"
}

/* inferindo tipos*/

let employee2: {
    code: 20,
    name: "Ronaldo"
}

/*Utilizando interface*/

interface Employee {
    code: number,
    name: string,
    profissao?: string
}

let employee3: Employee = {
    code: 30,
    name: "Ivan",
    profissao: "desenvolvedor"
}
