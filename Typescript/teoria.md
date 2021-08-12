***INTERFACES***
Interfaces e Alias são formas de tipar constantes ou objetos dentro do typescript.

As **interfaces** são usadas para, somente, descrever objetos
Os **type alias** são usados para declarar tipos, seja um tipo primitivo, união ou um objeto.

    interface Pessoa { 
        nome: string
        idade: number    
    }

    type Pessoa = {
        nome: string 
        idade: number 
    }


----------------------------------------------------------------
***CLASSES***
*nem todos os browsers suporta*
Classe são usadas para represetação de um tipo de objeto. Uma classe pode apresentar vários objetos.

Ela é composta por atributos e métodos.
Pode ter visibilidade **public**(padrão) ou **private**.

    class Pessoa {
        nome:string;
        private idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }
    }

