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
***Sem instalar na maquina***<br>
Abra a pasta do projeto pelo terminal e digite:

    npx create-react-app *nome-projeto*

Após carregar, siga as instruções do terminal.

    cd *nome-projeto*
    npm start

***Instalando versão global na maquina***<br>

Abra a pasta do projeto e pelo terminal, digite:

    npm install -g create-react-app

Agora digite:

    create-react-app *nome-projeto*

Após carregar, siga as instruções do terminal.

    cd *nome-projeto*
    npm start

---
***Começando***<br>
**GAMA**<br>
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
Consumir dados de uma API: fazer requisição para um servidor, solicitando usar alguns de seus dados.<br>

**API REST**<br>
ParÂmetros:<br>

**API RESTFUL**<br>
Seguir todos os parâmetros REST<br>

---
**REACT-ROUTER**<br>
Serve para rotearmos todas as telas da nossa aplicação, por exemplo, tela home e tela fale conosco.<br>
Muda a rota de acordo com o que escolhemos<br>

**Instalando React Dom**<br>

    npm install react-router-dom
    
**Cria a pasta routes.js**

    import React from 'react';
    import { Switch, Route, BrowserRouter } from 'react-router-dom';
    import Component from './Component';
    import Component from './Component';


    function Routes() {
        return ( 
            <BrowserRouter>
                <Switch >
                <Route path="/component" component={ Component } /> 
                <Route path="/component" component={ Component } /> 
                </Switch>
            </BrowserRouter>
        )
    }

    export default Routes;

**Dentro de App.js**<br>
Chamaremos apenas o componente Routes. <br>

    import React from 'react';
    import Routes from './routes';

    function App() {
    return ( 
        <>
          <Routes />
        </>
        );
    }


    export default App;

---
***STYLED-COMPONENTS***<br>
**Instalação**<br>
Na pasta do projeto:<br>

    # with npm
    npm install --save styled-components

    # with yarn
    yarn add styled-components

**Cria um arquivo js na pasta da página em questão.**

    import styled from "styled-components";

    export const NOME-DA-CLASS = styled.ELEMENTO-HTML`
        color: #000;
        font-family: sans-serif;
        font-size: 12px;
    `;

**Vá no arquivo do componente e importe:**

    import * as S from './styled'


 **mude o ELEMENTO-HTML por S.NOME-DA-CLASS;**
 
    <S.Container>

**Exemplo site styled-components**

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;

    antes:   
    render(
        <Section>
            <h1>
             Hello World!
            </h1>
        </Section>
    );

    depois:
    render(
        <Section>
            <Title>
             Hello World!
            </Title>
        </Section>
    );

---
***LOCAL STORAGE***<br>
LocalStorage consiste em salvar, adicionar, recuperar ou excluir dados localmente em um navegador Web, esta informação é guardada na forma de pares de chave-valor e os valores podem ser apenas strings.<br>

    meuStorage = localStorage;

    localStorage.setItem('meuGato', 'Tom');

---
***REDICIONAR PÁGINAS*** <br>
Podemos usar o **useHistory** em botões, por exemplo:

    import { useHistory } from 'react-router-dom'

    const history = useHistory();
    const voltar = () => {
    history.push('/homepage')
    }
    <button onClick={ voltar }}>Voltar</button>

Podemos usar a **NavLink** com barras de navegação, ela nos mostra qual guia está ativa, por exemplo:<br>:

    import { NavLink } from 'react-router-dom'

    <NavLink to = '/home' style = {{background: 'green'}} activeStyle = {{background: 'red'}}>Home</NavLink>
    <NavLink to = '/about' style = {{background: 'green'}} activeStyle = {{background: 'red'}}>About</NavLink>
    
Podemos usar o **Link** para vincularmos URl internas ou barras de navegação que não ficam visiveis durante a navegação, por exemplo:<br>

    import { Link } from 'react-router-dom'

    <Link to = '/home' style = {{background: 'green'}>Home</Link>

Podemos usar o **a** para vincularmos URL externas, por exemplo:

    <a href="https://github.com/">Git</a>

---
***TRATANDO ERROS***

Dentro do componente funcional:

    const [ erro, setErro ] = useState(false);

Dentro da função que vai manipular o elemento:


    setErro(false);

    .catch(err => {
        setErro(true);
        });

Dentro do return do componente funcional:

    { erro ? <S.ErrorMgs>Usuário não encontrado, tente novamente!</S.ErrorMgs> : null } 

**Conditional rendering:** usar um condicional na renderização.

---
***PARA APROFUNDAR***
- React Context API
- Redux
- Next.Js
- Gatsby.js 