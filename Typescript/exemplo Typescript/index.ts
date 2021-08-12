function somar(numero1: number, numero2: number) {
    return numero1 + numero2;
}

const meuNumero1 = 10;
const meuNumero2 = 5;

const resultado = somar(meuNumero1, meuNumero2)
console.log(resultado)

type pessoa = {
    nome: string;
    idade: number;
    matricula: boolean;
}

let alunos: pessoa[] = [{
    nome: 'Camila Lacerda',
    idade: 28,
    matricula: true
}, {
    nome: 'Amanda Lacerda',
    idade: 27,
    matricula: false
}]

console.log(alunos)
console.log(alunos[0])
console.log(alunos[1])


var nome: any = "camila"

nome as number;

nome = 16

console.log(nome)

interface Pessoa {
    nome: string
}
