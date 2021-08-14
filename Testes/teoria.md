***TIPOS PRINCIPAIS DE TESTES AUTOMATIZADOS***<br>
1. Testes de Unidade Automatizada (Unit Tests)<br>
Testes de unidade automatizada são gravados para teste no nível de código, bugs são identificados nas funções, métodos e rotinas escritas pelos desenvolvedores.<br>
1. Web Service / API Tests<br>
Uma Application Programming Interface (API) possibilita que o software converse com outros aplicativos de software, assim como qualquer outro software, as APIs precisam ser testadas. Nesse tipo de teste, a GUI geralmente não está envolvida.<br />
3. Testes de GUI automatizados<br>
Esse tipo de teste automatizado é a forma mais difícil de automação porque envolve o teste de uma interface do usuário do aplicativo.<br>

---
***TDD (TEST DRIVEN DEVELOPMENT)***<br>
**Desenvolvimento Orientado por Testes:** <br>
Cria a demanda, roda o teste e desenvolve em cima do resultado do teste.<br>
Funcionalidades: funções, API's<br>
Guia para desenvolvimento<br>
Voltado para desenvolvedor<br>

---
***BDD (BEHAVIOR DRIVEN DEVELOPMENT)***<br>
Desenvolvimento Orientado ao Comportamento<br>
Voltado para o négocio: CSS, responsividade, interações<br>

*CI/CD designa respectivamente Continuous Integration e Continuous Delivery* <br>

---
***EXPRESS***<br>
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.<br>

---
**Instalação**<br>
*APENAS NA PRIMEIRA VEZ*<br>

Digita no prompt: 

    npm install express-generator -g

*A CADA NOVO PROJETO*<br>
Entra na **pasta do projeto (cd)** e digita:

    express NOMEPROJETO --view ejs

Entra no **projeto (cd)** e digita:

    npm install

Para abrir no browser: 

    npm start


**Alterações são nas pastas views e public**

---
***JASMINE***<br>
 Jasmine é um framework de teste de software que segue a técnica (BDD) e ele é utilizado junto com o (TDD)<br>

Para testar algo com Jasmine você pode utilizar: <br>
**describe(string, function):** nome do escopo do teste.<br>
**it(string, function):** nome do teste.<br>
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

*Dentro do diretório do Jasmine:*<br>
lib: diretório com as bibliotecas do Jasmine.<br>
spec: diretório para criação dos testes.<br>
src: diretório contendo os arquivos que serão testados.<br>

---
***CUCUMBER***<br>
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
***JEST***<br>
Pode ser usado em Node, JavaScript puro, React, Angular, Vue e outros frameworks.<br>
É bem completo, rápido e precisa de pouca configuração para usar. Quando os testes não passam, fornece um contexto rico do motivo de ter falhado.<br>
Parecido com Jasmine mas no lugar de 'it' se usa 'test'<br>

---
***CYPRESS***<br>
Cypress é uma ferramenta poderosa de última geração desenvolvida especialmente para engenheiros de controle de qualidade (analistas QA) e desenvolvedores, que podem usá-la para os testes unitários. Totalmente baseado em uma nova arquitetura isenta do Selenium, apresenta o próprio painel exibindo exatamente o que está acontecendo durante a execução dos testes. <br>

Quando instalar o Cypress, vai ter uma pasta chamada “examples” com mais de 100 testes para serem executados.<br>

---

