***TDD (TEST DRIVEN DEVELOPMENT)***
Desenvolvimento Orientado por Testes
Funcionalidades: funções, API's
Guia para desenvolvimento
Voltado para desenvolvedor


***BDD (BEHAVIOR DRIVEN DEVELOPMENT)***
Desenvolvimento Orientado ao Comportamento
Voltado para o négocio: CSS, responsividade, interações


CI/CD designa respectivamente Continuous Integration e Continuous Delivery 

***EXPRESS***
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

**Instalação**
Digita no prompt:

    $ npm install express-generator -g

Entra na pasta do projeto (cd) e digita:

    $ express NOMEPROJETO --view ejs

Entra na pasta do projeto (cd) e digita:

    $ npm install

---
***JASMINE***
 Jasmine é um framework de teste de software que segue a técnica (BDD) e ele é utilizado junto com o (TDD)

Para testar algo com Jasmine você pode utilizar: 
**describe(string, function):** nome do escopo do teste.
**it(string, function):** nome do teste.
**expect(actual):** chamada do evento/function … etc que será testado
<br />

*Alguns dos retornos default do Jasmine:*

    expect(array).toContain(member);
    expect(fn).toThrow(string);
    expect(fn).toThrowError(string);
    expect(instance).toBe(instance);
    expect(mixed).toBeDefined();
    expect(mixed).toBeFalsy();
    expect(mixed).toBeNull();
    expect(mixed).toBeTruthy();
    expect(mixed).toBeUndefined();
    expect(mixed).toEqual(mixed);
    expect(mixed).toMatch(pattern);
    expect(number).toBeCloseTo(number, decimalPlaces);
    expect(number).toBeGreaterThan(number);
    expect(number).toBeLessThan(number);
    expect(number).toBeNaN();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(number);
    expect(spy).toHaveBeenCalledWith(...arguments);

<br />

*Dentro do diretório do Jasmine:*
lib: diretório com as bibliotecas do Jasmine.
spec: diretório para criação dos testes.
src: diretório contendo os arquivos que serão testados.

---
***CUCUMBER***
O Cucumber é uma ferramenta usada para executar testes de aceitação automatizados que foram criados em um formato BDD. Um de seus recursos mais destacados é a capacidade de realizar descrições funcionais de texto simples (Gherkin).
- Descreva um comportamento em um texto simples;
- Escreva uma definição dos passos em Java ou em outras linguagens;
- Execute e veja os passos falhar;
- Escreva o código para fazer os passos passar;
- Se necessário, refatorar o código ou o comportamento descrito.


    exemplo:

        Feature: Update password
        Scenario: Admin user can update the user password
        Given I am in the HR system with an Admin account
        When I update password of another user
        Then I receive a message for updating password successfully
        And user password is updated to the new password

---
***JEST***
Pode ser usado em Node, JavaScript puro, React, Angular, Vue e outros frameworks.
É bem completo, rápido e precisa de pouca configuração para usar. Quando os testes não passam, fornece um contexto rico do motivo de ter falhado.
Parecido com Jasmine mas no lugar de 'it' se usa 'test'

---
***CYPRESS***
Cypress é uma ferramenta poderosa de última geração desenvolvida especialmente para engenheiros de controle de qualidade (analistas QA) e desenvolvedores, que podem usá-la para os testes unitários. Totalmente baseado em uma nova arquitetura isenta do Selenium, apresenta o próprio painel exibindo exatamente o que está acontecendo durante a execução dos testes. 

Quando instalar o Cypress, vai ter uma pasta chamada “examples” com mais de 100 testes para serem executados.

---