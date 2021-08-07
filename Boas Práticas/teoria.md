#### VISAM PADRONIZAÇÔES 

***DESIGN SYSTEM***
Documentação viva de todos os componentes do software ou site
Aumenta eficiência e melhora a comunicação

**O que ele pode ser:**
- Biblioteca do Adobe XD;
- Lista de componentes no Figma;
- Site com vários componentes em HTML/CSS prontos;
- Manual de identidade visual.

---
***STORYBOOK***

Ferramenta que prepara o ambiente de desenvolvimento de componentes UI.
Permite desenvolver de forma isolada os componentes de interface.
Uma biblioteca na qual você cria componentes de design e expoort para seu projeto.

---
***MICRO FRONTENDS***
Evolução natural no desenho de arquitetura de software
É a integração de várias tecnologias na realização de um projeto.

- O **Single SPA** (Single Single-Page Application) é um framework JavaScript que garante o desenvolvimento de micro front-ends com liberdade de escolha de qualquer outro front-end framework, realizando a integração entre cada parte desenvolvida.

---
***MVC (Model View Controller)***
O MVC é utilizado em muitos projetos devido a arquitetura que possui, o que possibilita a divisão do projeto em camadas muito bem definidas. Cada uma delas, o Model, o Controller e a View, executa o que lhe é definido e nada mais do que isso.

- **View:** Interface gráfica que interege como o usuário
- **Controller:** intermediador entre o View e o Model
- **Model:** Recebe, trata e valida os dados/ conecta ao banco de dados, quando necessário.

---
***MVVM (Model View ViewModel)***
O MVVM permite a você ter uma visão, da clara separação da Interface com o usuário( View ), sua lógica de apresentação (ViewModel) e os seus Dados(Model). E trabalhando desta forma, temos separação de responsabilidades, desacoplamento e conseguimos evoluir e manter melhor as nossas aplicações.

- ** View:** Interface gráfica que interege como o usuário. O codebehind da view, define comportamentos visuais
- **View Model:** Disponibilizar para a View uma lógica de apresentação. A View Model não tem nenhum conhecimento específico sobre a view.
- **Model:** Regras de négocio. Encapsula os dados. provê eventos de notificação de mudança de estado, através das interfaces INotifyPropertyChanged and INotifyCollectionChanged.

---
***Design Patterns: Singleton, Strategy e Adapter***
Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

- **Singleton:** temos mais controle sobre o acesso às propriedades e métodos de uma classe, e também reduzimos o consumo de memória desnecessário por utilizar várias instancias desnecessárias de uma classe.
- **Strategy** é um padrão de projeto comportamental que permite que você defina uma família de algoritmos, coloque-os em classes separadas, e faça os objetos deles intercambiáveis.
- **Adapter:** é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.
---