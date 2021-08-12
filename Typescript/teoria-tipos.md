***TYPESCRIPT***

Superset(superconjunto) do JavaScript
- Tipagem estática
- Intefaces
- Enums
- Decorators
- Generics

Typescript é usando apenas no desenvolvimento. Na implementação, o código é compilado e convertido para Javascript.

***INSTALAÇÂO***
Digite no terminal:

    npm install -g typescript

Para compilar digite no terminal:

    tsc nomeArquivo.ts

---
***RECURSOS PRINCIPAIS***
**TIPOS**

Declarar variável:

    let nomeVariável: tipo = atribuição;

    exemplo:

    let idade: number = 10;
    const nome: string = 'Camila Lacerda';


**Any**
Equivale a uma variável padrão do JS. Anula a tipagem do Typescript.

**Boolean**

**Number**
Todos os números são definidos como números reais.

**String**


**Array**
Há duas formas:

    let a: tipo[] = []
    let b: Array<tipo> = []

    exemplo:
    let idade: number[] = [20, 39, 60];
    let ano: Array<number> = [2009, 2016, 2019];

**Tuple**
Semelhante a um array, mas você delimita qual tipo e onde estará os valores.

    let pessoa: [string, number, boolean] = ['camila', 28, true];

**Enum**

    enum Level { Estagiário = 1, Junior = 1, Pleno = 5, Senior = 10} ;

    if(user.level < Leve.Senior) {
        return 'Acesso Negado';
    }

**Void**
Para explicitar que a função não tem retorno.

**Null e Undefined**
Tipo Null precisa ser declarado para ser ser aceito.

**Operador Elvis**
Ele indica que uma propriedade é opcional.

**Object**
Temos dois tipos.

O primeiro deve-ser seguir exatamente a estrutura.

    let pessoa: { nome: string, idade: number, estudante?: boolean } = {
    name: 'Camila Lacerda',
    age: 28,
    }
O segundo é flexível e pode receber qualquer conjunto de chave/valor.


    let endereço: { [chave: string]: any } = {
    rua: 'nome da rua';
    número: 390
    }

**Never**
É usado quando você tem certeza que o evento nunca ocorrerá.

**Union Types**
Possibilidade de uso de mais de um tipo na variável, parâmetro ou função.
Utilize o operador | (ou)
let numero: number | string = 3;

**Type Alias**
Você pode criar um type com suas customizações e usar ao logo do código.

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
        nome: 'Luiza Carvalho',
        idade: 27,
        matricula: false
    }]


**Assertion**
Você faz uma afirmação para linguagem, evitando eventuais erros.

Redefinir uma variável, que inicialmente era any.

    let nome: any = 'Camila';
    nome as number
    nome = 16;

    ou 
    
    let nome: any = 'Camila';
    <number>nome
    nome = 16;

**E se eu não definir o tipo?**
Por padrão, o compilador do TypeScript vai utilizar o type inference, que define o tipo da variável como o do valor recebido por ela.
