***CONCEITOS***<br>
Estilo em cascata, CSS sempre pega o **ÚLTIMO** valor<br>
Mobile First (68% da pop.)

---
***SELETORES***<br>
*Encapsulamento*

    seletor {
        propriedade: valor
    }

    .class li a {}: vai seguir esse caminho
    .class, li , a {}: vai alterar todos esses três seletores do documento.
    .class > p {}: altera filhos diretos.
    * {} : Todos os elementos

---
***BASICOS***<br>

    background-color: cor de fundo
    background-image: imagem de fundo
    color: cor fonte ou elemento

    width: largura
    height: altura

    padding: espaço interno ao elemento
    margin: espaço ao redor do elemnto

    border: borda (ex:  border: 3px solid black)
    border-radius: arredonda as bordas. Se colocar 50%, transforma em um circulo

    text-align: alinhamento do texto.
    text-decoration: none(nenhum), sublinhado, e outros.
    


**dica: coloque background-color no elemento para entender melhor padding e margin.**
}


---
***FONTS**

    font-family: Nome da fonte
    font-size: Tamnho
    font-weight: Peso (negrito)
    font-style: oblique, italic 
    line-height: altura da linha, font


     @import url(); importa uma font para o documento. => use o site (https://fonts.google.com/) para pegar fontes
---

***LINKS***

    :link : não visitado
    :visited : visitado
    :hover : passar o mouse
    :active : clicar 

    :focus : durante o foco
    transition: ms

***DISPLAY***<br>

    block: bloco.
    inline: linha.
    flex: layout reponsivo em blocos
    flex-direction: row(linha) e column(colun)
    justify-content: alinhamento horizontal do elementos.
    align-center: alinhamento vertical do elementos.
    grid: layout reponsivo manupulado como uma matriz.

    !important:** forçar um estilo

---
***RESPONSIVIDADE***<br>
- evitar repetir código
- evitar estilo inline (são absolutos)
- use grids e flexbox
- evite estilos absolutos e relativos
- use media querys

Media queries:

    @media (max-width: ){

        Altera os seletores de acordo com o tamanho estipulado.

    }

Tem outras propriedades como and que acrescentam condições.
<br>
**Extensão que redimensiona para várias resoluções de tela:** https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh

---

***REFERÊNCIAS PARA APRENDER MAIS***<br>
Documentação: https://css-tricks.com/almanac/properties/a/align-items/<br>
Grid: https://cssgridgarden.com/ <br>
Flexbox: https://flexboxfroggy.com/<br>
    https://mastery.games/flexboxzombies/<br>

---