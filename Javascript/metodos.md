***CAIXAS DE DIÁlOGO***<br>
windows.alert() <br>
window.confimr() : ok ou cancel<br>
window.prompt() : input<br>

---
***FUNCÕES E MÉTODOS***<br>
**-n é a variável em questão-** <br>
parse = converter

**Number.parseInt() ou parseInt():** Converte em número inteiro<br>
**Number.parseFloat() ou parseFloat():** Converte em número decimal<br>
**Number():** o Js converte automaticamente<br>
**String():** converte em string<br>
**n.toString():** converte em string<br>

**n.length:** tamanho da string<br>
**n.toUpperCase():** todas maiúsculas<br>
**n.toLowerCase():** todas minúsculas<br>

**n.toFixed():** fixa as casas decimais<br>
**n.replace(um, por outro):** troca um valor por outro<br>
**n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRA'})** : moeda local<br>


***AULAS GAMA***<br>
**n.substring(índiceStart[, índiceSEnd]):** retorna a parte da string entre os índices inicial e final<br>
**n.charAt(índice):** Retorna o caractere que se encontra nesse indice<br>


---

***ARRAY***
[].toString():converte um array em uma string de valores(separados por vírgula).<br>

[].join(): permite especificar um separador.<br>

[].push(): adiciona um novo elemento ao final de um array.<br>

[].unshift(): incluir um novo elemento no início do array.<br>

[].pop(): remove o último elemento de um array.<br>

[].shift(): para remover o primeiro elemento e deslocar os demais elementos para um índice menor.<br>

[].forEach(): executa uma dada função em cada elemento de um array.

[].map(): invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

[].splice(p1, p2, i1, i2) pode ser usado para incluir e excluir elemento = costurar<br>
**Adicionando**:<br>

- O primeiro parâmetro (p1) define a posição onde os novos elementos serão incluidos.
- O segundo parâmetro (p2) define quantos elementos serão removidos.
- Os parâmetros restantes (i1 e i2) definem os novos elementos que serão adicionados.

**Removendo**

- O primeiro parâmetro (p1) define a posição onde o elemento será removido.
- O segundo parâmetro (p2) define quantos elementos serão removidos.
- Se os demais parâmetro forem omitidos, nenhum elemento será adicionado;


---

[].concat() cria um novo array mesclando arrays existentes.<br>
arrayConcat = array.concat(array2)<br>
Com Spread: arrayConcat = [...array, ...array2]

---

[].slice(inicio, valor): divide uma parte de um array em um novo array. = dividir. <br>

- inicio - Indica o índice o do elemento selecionado
- valor- indica quantos elementos serão selecionados.
  Se valor for omitido será selecionado o restante do array a partir de inicio.

---

***MÉTODOS DE BUSCA***
**Procurando alguma coisa**<br>
[].indexOf(): Procura no array por um elemento a partir do índice e retorna o índice onde foi en encontrado. Se não encontrar retorna -1;<br>

[]. astIndexOf(): Exatamente como o anterior. A diferença é que ele inicia a partir do fim do array;<br>

[].includes(): Procura no array pelo elemento a partir do índice e retorna true se encontrar e false se não encontrar. É usado para verificar se um objeto existe em um array;<br>

--------------------------------------------------------------

**Procurando algo com uma condição específica**

[].find(): Retorna o valor do primeiro elemento no array que atendeu a condição<br>

[].findIndex(): Retorna o índice do primeiro elemento no array que atendeu a condição.<br>

[].filter() retorna um array com todos os elementos no array original que atende a uma condição.<br>


***SPREAD (...)*** <br>
Faz com que os valores se adaptem onde estão sendo aplicados,

    var list = [1, 2, 5]
    var addList = [3, 4]
    var listFinal = [1, 2, ...addList, 5]


Para **fazer cópias** de arrays usamos:


    let array = ['a', 'b', 'c']
    let array2 = array.slice(0) 

ou usando spread:

    let array = ['a', 'b', 'c']
    let array2 = [...array] 

***Aplicar operações Math*** usando o spread:

    let array = [1, 2, 3, 10, 100]
    let max = Math.max(...array)

---
***Criando um array usando o resultado de uma comparação***
var minhaRegex = /d(b+)(d)/i;
var meuArray = minhaRegex.exec('cdbBdbsbz');

str.match(regexp);

Se você deseja obter grupos de captura e o sinalizador global (g) está definido, você precisa usar RegExp.exec() ou String. prototype.matchAll() em vez disso.
