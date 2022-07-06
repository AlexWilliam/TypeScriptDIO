/*
* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

// Resolução
interface IFuncionario {
    name: string,
    code: number
}

const EMPLOYEE: IFuncionario = {
    name: "John",
    code: 10
}