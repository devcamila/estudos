***COMENTÁRIOS***<br>
*ATALHO: seleciona e ctrl + ;*<br>
JavaScript: //: uma linha ou /**/:  várias linhas<br>
html (<!--     hífen->) <br>
css /* */

---
***VARIÁVEIS E TIPOS PRIMITIVOS***<br>
- **Identificadores(nomeVariavel):** começa com letra, $ ou _
- Sempre usar espaço entre operadores e após a virgula
- **Indentação:** use dois espaços
- Sempre termine uma insttrução simples com ;
- Tipos de variáveis= string, number, boolean, null, undefined, symbol

**var:** escopo global, escopo de função, pode ser redefinida e sofre hosting<br>
**let:** escopo de função, escopo de bloco, pode ser redefinida<br>
**const:** escopo de função, escopo de bloco, não pode ser redefinida<br>

**null(vazio) !== undefinded(indefinido)**<br>

**Concatenar:** Juntar variáveis. <br>

    var nome = 'Camila '
    var sobrenome = 'Lacerda'
    var nomeCompleto = nome + sobrenome


**Template Strings:**<br>
Possível interpolar strings e expressões.<br>
Além de criar strings multi-linhas.<br>

    `Olá ${nome}!`

    Space holder: ${}

---
***PRECEDÊNCIA DE OPERAÇÕES***<br>
parênteses: () <br>
pontenciação: **<br>
multiplicação e divisão: * / %<br>
soma e subtração: + -<br>
resto: % : mode<br>

---
***CONDICIONAIS***<br>
**IF / ELSE**

    if (condição) {
        ação ;
    } else if (condição) {
        ação ;
    } else {
        ação ;
    }

***SWITCH***

    switch (condição) {
        case 'A' :
            ação ;
                break;
        case 'B' :
            ação ;
                break;
        case 'C' :
            ação ;
                break;
        default :
            ação;
    }

***OPERADOR TERNÁRIO*** 

    (condição) ? ação : outra ação

---
***ESTRUTURAS DE REPETIÇÂO***<br>
**FOR**

    for (let i = 0; i <= 100; i++) {
        ação quando houver
    }

**WHILE**<br>
Não sei o fim, é preciso criar uma flag de parada.

    while (condição) {  
        ação   
    }

---
***SPREAD (...)*** <br>
Faz com que os valores se adaptem onde estão sendo aplicados,

    var list = [1, 2, 5]
    var addList = [3, 4]
    var listFinal = [1, 2, ...addList, 5]

---
***ARRAYS***<br>
Não é possível fazer cópia de uma array, como podemos fazer de variáveis, apenas referência-lo.<br>

Para **fazer cópias** de arrays usamos:


    let array = ['a', 'b', 'c']
    let array2 = array.slice(0) 
ou usando spread:

    let array = ['a', 'b', 'c']
    let array2 = [...array] 

**Para concatenar** arrays usamos:

    let array = ['a', 'b', 'c']
    let array2 = ['d', 'e', 'f'] 
    arrayConcat = array.concat(array2)
ou usando spread:

    let array = ['a', 'b', 'c']
    let array2 = ['d', 'e', 'f'] 
    arrayConcat = [...array, ...array2]

***Aplicar operações Math*** usando o spread:

    let array = [1, 2, 3, 10, 100]
    let max = Math.max(...array)

---
***FUNÇÔES***

    function nomeFuncao(parametros) {
        instruções
        return
    }

    exemplo:
    function soma(numero1, numero2) {
        resultado = numero01 + numero2;
        return resultado
    }

*ARROW FUNCTIONS*

    const nomeFuncao = (parametros) => {}

    exemplo:

    const soma = (numero1, numero2) => {
        resultado = numero01 + numero2;
        return resultado
    }

---
***CLASSES***<br>
Maneira de criar objetos e lidar com herança<br>

Exemplo:

    class NomeCLasse {
        funçãoA(parametro) {
            return
        }
        funçãoB(parametro) {
            return
        }
    }

**Criar instância:**

    let criarInstância = new NomeClasse() ;

---
***OBJETOS***<br>
É uma coleção de dados e/ou funcionalidades<br>
Tem propridades de chave e valor<br>
Quando o valor de uma propriedade é uma função, chama-se método do objeto<br>

    let NomeObject = {
        nome: 'valor',
        nome: 'valor',
        nome: 'valor',
    }

    exemplo:
    
    let Pessoa = {
        nome: 'Camila',
        sobrenome: 'Lacerda',
        idade: function idade(anoAual, anoNascimento) {
            return anoAual - anoNascimento;
        }
    }
Para acessar apenas uma propriedade:

    let nome = Pessoa.nome

---
**DESTRUCTURING**<br>
Pode acessar várias propriedades de uma vez.<br>
Pode acessar propriedades de objetos aninhados (objeto dentro de objeto) e renomear propriedades<br>
Pode definir um valor padrão se a propriedade não existir.<br>

    let = {nome, sobrenome, idade} = Pessoa

---
***ORIENTAÇÃO A OBJETOS***<br>
Encapsulamento<br>
Herança <br>
Polimorfismo<br>

---
***MATCH***<br>
Retorna uma correspondência entre uma string com uma expressão regular (RegExp)

    let texto = 'Meu cep é 38.000-000';
    const regex = new RegExp('[0-9]{2}.[0-9]{3}-[0-9]{3}');

---
***SPA (Single Page Applications)***<br>
São aplicações cuja funcionalidade está concentrada em uma única página. Ao invés de recarregar toda a página ou redirecionar o usuário para uma página nova, apenas o conteúdo principal é atualizado de forma assíncrona, mantendo toda a estrutura da página estática.(site DevMedia)<br>

**Frameworks: React, Angular e Vue.js.**

---
***PWA Progressive Web Apps)***<br>
É uma aplicação híbrida entre web e mobile. <br>
- Progressivo: Funciona para qualquer usuário em qualquer navegador.
- Responsivo: Adapta em qualquer formato.
- Indepedente de conectividade.
- Semelhante a aplicativos: interface semelhante a um app.
- Sincronizado
- Seguro (https)
- Reenvolvente: Gerar engajamento através das notificações PUSH.
- Instalável
- Linkável
  <br>

Exemplos: Google Agenda, YouTube

---
***WEBCOMPONENTS***<br>
É uma suíte de diferentes tecnologias que permite a criação de elementos customizados reutilizáveis<br>

**- HTML TEMPLATE:** possibilita a criação de fragmentos HTML que podem ser invocados.<br>
**- Custom Elements:** capacidadee de criar elementos customizados.<br>
**- Shadow DOM:** estilos e diretivas globais ficam encapsulados.<br>
**- ES MODULES:** possibilidade de carregar módulos nativamente.<br>
- Capivara.js

---

