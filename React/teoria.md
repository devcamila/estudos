***REACT*** <br>
- Framework oara criação de interfaces.
- Construi SPA
- Tudo dentro do JavaScript.

***VANTAGENS***<br>

**- Organização do Código**<br>
   Código dividido em blocos(components) que funcionam independentes. 
   <br>
**- Divisão de Resposabilidade**<br>
    Back-End: Regras de negócios.
    Front-End: Interfaces.
    <br>
**- Programação Declarativa**<br>
    Dizemos o que queremos e ele se encarrega.

**Linguagem imperativa: damos cada passo a ser seguido.*

---
**Alguns Pontos**<br>

O react acontece por renderizações. 
Renderizar = 'processar' algo e devolver um produto final.<br>

**JSX:** Um cogigo html dentro de um código Javascript.<br>
Ele vai pegar o arquivo JSX e inserir ele no Html do projeto.<br>

**Componetização:** Vamos criar componentes e renderiza-los no HTML.<br>

**Fragmentos:** <> </> são tags vazias que vão envolver nosso código.<br>

---
***Instalação***<br>

Abra a pasta do projeto pelo terminal e digite:

    npx create-react-app *nome-projeto*

Após carregar, siga as instruções do terminal.

    cd *nome-projeto*
    yarn start

---
***Começando***<br>
Na pasta ./scr temos a App.js e o index.**js**<br>

**App.js** é o arquivo do componente que vamos renderizar<br>

    function App() {
    return (
    <>
        <h1>Camila</h1>
    </>
    );
    }

**index.js** é onde iremos colocar os componentes que queremos renderizar.

    ReactDOM.render(
    <App />,
    document.getElementById('root')
    );

Na pasta public tem o arquivo index.html.É nele que os componentes serão renderizados.

    <div id="root"></div>

<br>

***Essas são pastas e componentes que o react traz de padrão***<br>

Em projetos nossos, teremos outras pastas, componentes e linkaremos a outros elementos do html, por exemplo, iremos renderizar um componente no header ou ou outra div.<br>

**Sempre** temos que imporatr e exportar os arquivos para que eles sejam renderizados.<br>

---
***PADRÃO***

    import


    function App() {
        return (
        <>
            *COMPONENTE*
        </>
        );
    }

    export default App;

---
***CONCEITOS***
<br>
- **Tags sem fechamento** no html como img, input ou br. São escritas com a barra <_input conteúdo />

- Class é uma palavra reservado do React pois isso as classes são escritas como **className**

- Elementos e atributos no HTML são propriedades no React.

- Atributos de javascript são inscritos dentro de chaves, exemplo:

        onClick = handlePesquisa}
        value = {usuário}



---
**PROPS**
<br>
Podemos escrever propriedades na chamado do componente. <br>
E Para ele receber essa propriedade devemos usar {props.elemento} <br>
Exemplo: <br>


    ReactDOM.render(
    <App title="Hello world!"/>,
    document.getElementById('root')
    );

---
    function App() {
    return ( 
        <>
        <hi>{props.title}</hi>
        <input  />
        </hi>
    );
    }

---
**HOOKS**<br>
Definir (set) e modificar estados.

---
**API**
Consumir dados de uma API

---