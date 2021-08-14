***TARGET***<br>
Para do versão do javascript será transpilado.<br>
Default é para ES5 por ser suportada pela maioria dos browsers<br>

---
***INTERFACES***<br>
Interfaces e Alias são formas de tipar constantes ou objetos dentro do typescript.<br>

As **interfaces** são usadas para, somente, descrever objetos<br>
Os **type alias** são usados para declarar tipos, seja um tipo primitivo, união ou um objeto.<br>

    interface Pessoa {
        nome: string
        idade: number
    }

    type Pessoa = {
        nome: string
        idade: number
    }


----------------------------------------------------------------
***CLASSES***<br>
*nem todos os browsers suporta*<br>

Classe são usadas para represetação de um tipo de objeto. Uma classe pode apresentar vários objetos.<br>
Ela é composta por **atributos**(caracteristicas) e **métodos**(funcionalidades).<br>

**Modificadores de acesso**<br>
Pode ter visibilidade **public**(padrão) ou **private**.<br>
Private: a propriedade só é visível e aterável dentro da propria classe.<br>



    class Pessoa {
    nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        }
    }

---
***HERANÇA*** <br>
È a criação de uma classe filha herda os atributos e métodos de uma classe pai.<br>
Mas também pode ter suas propriedades independentes.<br>

    class NomeClasseFilha extends NomeClassePai {

        constructor {
            super(Parâmentos)
        }
    }

---