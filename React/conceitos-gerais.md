**CONCEITOS GERAIS**<br>

Na **pasta SRC** ficaram todos os arquivos que iremos editar no projeto.<br>

1. Apagar todos os arquivos da pasta com exceção de index.js 

2. Criar uma pasta chamada componentes, dentro de SRC.<br>
**Nela ficará todos os nossos componentes.**

3. Criar um arquivo App.js.<br>

**Componente Global: nesse arquivo todos os outros componentes ficarão alocados.**<br>
Método render() é responsável por retornar o conteúdo HTML desse componente.<br>

    import React from 'react';

    export default class App extends React.Component {
        render() {
            return (
                CONTEÚDO
            )
        }
    }

---
**Quando o arquivo global é criado, é necessário ir no arquivo index.js e importá-lo**

    import App from './componentes/App';

---
***Agora novos componentes serão criados,linkados dentro do render() do App.js e importados nele.***

    import React from 'react';

    import Post from './Post';

    export default class App extends React.Component {
        render() {
            return (
                <>
                <h1>Hello world</h1>
                <Post title="Aprendendo"/>
                <Post title="React"/>
                </>
            )
        }
    }

Para acessar as propriedades que passamos para os componentes (por exemplo, title), usamos this.props:

escrevemos dentro da tag do componente

    <Post title="Aprendendo"/>

e chamamos dentro do arquivo do componente

    <h2>{ this.props.title }</h2>

---
***DIFERENÇAS ENTRE COMPONENTES FUNCIONAIS E COMPONENTES DE CLASSE***<br>

**Componente Funcional:**

    function App() {
        return (
            <>

            </>
        );
        }

    export default App;
        

**Componente de Classe**

    export default class App extends React.Component {
        render() {
            return (
                <>
                
                </>
            )
        }
    }


**Diferenças:**<br>
Um **componente funcional** é apenas uma função JavaScript simples que aceita props como um argumento e retorna um elemento React.<br>

Um **componente de classe** requer que você estenda de React.Component e crie uma função de renderização que retorna um elemento React.<br>

Um **componente funcional** não tem seu próprio state. Se precisar de um state em seu componente, você precisará criar um componente de classe ou elevar o state para o componente pai e passá-lo para o componente funcional por meio de props.<br>

    import React, { useState } from 'react';

    function App(props) {      
        return ( 
            <>

            </>
        );
    }

    export default App;

Outro recurso que você não pode usar em **componentes funcionais** são os ciclo de vida do hooks.<br>

O motivo é o mesmo que para o uso do state, todos os ciclo de vida do hooks vêm do React.Component. Portanto, se você precisa do ciclo de vida do hooks, provavelmente deve usar um componente de classe.<br>

Por outro lado, os componentes funcionais têm permissão para usar hooks onde os componentes da classe não são permitidos.<br> (texto resenhado site stackOverFlow)

---
