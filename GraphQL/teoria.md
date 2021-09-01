***CONCEITOS***<br>
***MODELO CLIENTE E SERVIDOR***<br>
A tecnologia cliente/servidor é uma arquitetura na qual o processamento da informação é dividido em módulos ou processos distintos. ... Os processos cliente enviam pedidos para o processo servidor, e este por sua vez processa e envia os resultados dos pedidos.<br>

***STATUS DE RESPOSTAS***

- Respostas de informação (100-199)
- Respostas de sucesso (200-299)
- Redirecionamentos (300-399)
- Erros do cliente (400-499)
- Erros do servidor (500-599)

***INICIANDO***
Criar a pasta<br>
Abrir a pasta por cd<br>
Digitar:

    npm init 

Dê enter nas perguntas até a pergunta entry point e digite 

    src/main.js

Dê enter no restante de perguntas.<br>
Criará um arquivo **package.json**.<br>

***Dependências***

    npm run test
    
    npm i -D esm

***Dentro de **package.json**<br>
Dentro de scripts e abaixo de test, digite:

​        

Dentro da pasta do projeto, crie uma pasta (src) e um dentro de src, um arquivo (main.js)

***Para Rodar***

    npm run start

---
***CRIAR UM SERVIDOR***

    import { createServer } from 'http';
    import { readFile } from 'fs';
    import { resolve } from 'path';
    import { parse } from   'querystring';
    
    const server = createServer((request, response) => {
        CODIGO COMPLETO NA PASTA EXEMPLO
    });
    
    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
    const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
    
    server.listen(PORT, HOSTNAME, () => {
        console.log(`listening on port http://${HOSTNAME}:${PORT}`);
})

---

***MONOREPO***

É um único repositório para manter o código de diversos projetos.<br>

Na aula fizemos um Monorepo para guardar a parte front, usando o React e a parte back(server) usando o Express.<br>

***OBJETIVO***
Facilitar algumas funções que na API REST não temos.

---
*** Met