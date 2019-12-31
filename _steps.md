## Criação da aplicação

O React possui o cli onde é possível gerar um projeto automáticamente com o Babel e o Webpack (com os loaders de CSS, imagens, etc) já configurados e encapsulados em outra biblioteca. Ao utilizar esse comando o git também é inicializado automaticamente.

Utilizamos esse método em praticamente qualquer projeto que utilize ReactJS. Só é recomendado fazer tudo manualmente quando existem muitas coisas únicas para serem configuradas (o que é raro).

Geramos um novo projeto através do comando `yarn create react-app`:

```bash
yarn create react-app rocketseat_05_reactjs-github-api
```

```bash
cd rocketseat_05_reactjs-github-api/
```

O comando `start` foi gerado no `package.json`. Ao digitar `yarn start` o projeto já abre automaticamente no navegador exibindo o logo do React.

Tipo de final de linha configurado para o GIT:

```bash
git config core.autocrlf false
```

Após criação do projeto no site do GitHub, ele foi associado com a pasta local e enviado pro repositório:

```bash
git add .
git commit -m "Inicializa projeto | Cria aplicação ReactJS"
git remote add origin https://github.com/cafecomlucas/rocketseat_05_reactjs-github-api.git
git push -u origin master
```

---

(Devido um alerta de segurança no GitHub, o arquivo de cache do Yarn `yarn.lock` foi removido e criado novamente através do comando `yarn` no terminal.)

---

## Estrutura inicial | Removendo itens desnecessários

No arquivo `public/index.html` removemos os comentários e também a importação do arquivo de manifesto, que é utilizado apenas na criação de PWAs. Também removemos o arquivo `public/manifest.json`, as imagens do logo e o `robots.txt`.

Na pasta `src` removermos o `serviceWorker.js` e sua importação no arquivo `App.js`, também utilizado em PWAs. Removemos também as imagens, os arquivos CSS e os arquivos JS desnecessários, como também suas respectivas importações.

---

## Estrutura inicial | Analise do package.json gerado

Ao acessar o arquivo `package.json` verificamos que dentro da propriedade `scripts` já estão configurados os seguintes itens:

- `start`: para iniciar o projeto em ambiente de desenvolvimento
- `build`: para compilar a versão que vai para produção
- `test`: para execução de testes
- `eject` para ejetar as configurações do Webpack e Babel para pasta raiz, caso necessário

---

## Padrão de código | Configurando EditorConfig, ESLint e Prettier

### ESLint

Para verificar alguns padrões de código e se o mesmo está correto, utilizamos o ESLint.

Como a configuração é manual, a propriedade `eslintConfig` gerada automaticamente foi removida do `package.json`.

Instalamos a dependência de desenvolvimento ESLint:

```bash
yarn add eslint -D
```

Após instalação, criamos o arquivo de configuração (.eslintrc.js):

```
yarn eslint --init
```

Nas respostas das perguntas de configuração, selecionamos:

- **How would you like to use ESLint?**
  To check syntax, find problems, and enforce code style

- **What type of modules your project use?**
  JavaScript modules (import/export)

- **Which framework does your project use?**
  React

- **Does your project use TypeScript?**
  No

- **Where does your code run?**
  Browser

- **How would you like to define a style for your project?**
  Use a popular style guide

- **Which sytle guide do you to follow?**
  Airbnb

- **What format do you want your config file to be in?**
  JavaScript

- **Would you like to install them now with npm?**
  Yes

As instalações das dependências foram feitas pelo `npm` e o arquivo `package-lock.json` (cache do npm) foi criado. Como estamos utilizando o `yarn` deletamos esse arquivo e fizemos o mapeamento das novas dependências instaladas no `yarn.lock` através do comando:

```
yarn
```

Para o ESLint funcionar também é necessário ter o plugin do ESLint no VSCode.

Para que os erros detectados pelo ESLint sejam corrigidos automaticamente ao salvar o arquivo, nas configurações do editor (`settings.json`), setamos as variáveis `editor.formatOnSave`, `editor.codeActionsOnSave` e `eslint.validate`.

No arquivo `.eslintrc.js` que foi gerado, setamos algumas regras adicionais na propriedade `rules`. Configuramos para que o ESLint aceite arquivos `js` (além de JSX). Configuramos também para que o `export default` não seja obrigatório pois vamos precisar exportar sem o default neste projeto.

### Prettier

O módulo do Node Prettier faz a verificação de regras de código adicionais, como a formatação do código em uma ou mais linhas e o tipo de final de linha (lf ou crlf). É feito para deixar o código mais "bonito".

Instalamos o Prettier e módulos complementares para poder integra-lo ao ESLInt:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Arquivo `.prettierrc` criado para sobrescrever algumas regras da Airbnb. Indicamos o padrão de aspas simples (ao invés de duplas) e de inserção de uma vírgula logo após o último item de um Array.

No arquivo de configuração do ESLint, adicionamos a propriedade `prettier` em `plugins`. Também adicionamos o `prettier` e o `prettier/react` na propriedade `extends`, para que as regras do prettier sejam consideradas após as regras da Airbnb. Também modificamos a propriedade `rules` para que que todas as regras do `prettier` não cumpridas indiquem um erro.

Para o Prettier funcionar também é necessário ter o plugin do Prettier no VSCode.

### Babel ESLint

Instalamos também o `babel-eslint` para poder integrar o Babel ao ESLint, assim o ESLint saberá que estamos utilizando as últimas funcionalidades do JavaScript:

```
yarn add babel-eslint -D
```

No arquivo de configuração do ESLint, antes da propriedade `parseOptions`, adicionamos uma propriedade chamada `parser` com a string `babel-eslint`.

### EditorConfig

A extensão EditorConfig do VSCode permite que o arquivo `.editorconfig` seja gerado ao clicar com o botão direito na pasta de um projeto. Nesse arquivo são definidas regras adicionais (como espaçamento, indentação, charset, etc) para que desenvolvedores com diferentes editores de código tenham o mesmo tipo de formatação.

(Essa é apenas uma extensão pro editor, não é necessário instalar nenhum módulo do Node)

---

## Configurando roteamento no Front-end através do React

A configuração de rotas no cliente permite que o usuário navegue entre URLs diferentes sem precisar recarregar a página (característica de um SPA). Para trabalhar com essa funcionalidade, adicionamos o React Router DOM:

```bash
yarn add react-router-dom
```

Criamos a pasta `pages` com os componentes `Main/index.js` e `Repository/index.js`, que serão as paginas da aplicação a serem acessadas por rotas diferentes (`/` e `/repository`).

Na pasta `src` criamos o arquivo `routes.js` e importamos componentes do React Router DOM, sendo eles:

- `BrowserRouter`: container que permite navegar pela URL do browser
- `Switch`: garante que apenas o conteúdo de uma única rota será exibido por vez
- `Route`: indica o componente a ser exibido dependendo da rota acessada

A estrutura foi criada para que o conteúdo do componente `Main` seja exibido ao acessar o caminho `/` e que o conteúdo do componente `Repository` seja exibido ao acessar o caminho `/repository`.

Ao acessar o caminho `/repository` o componente `Main` apareceu pois o `Route` verifica apenas o começo da string do path (`/`) e para que isso não ocorra adicionamos a propriedade `exact` no `Route` com o path="/".

Modificamos o componente `App` para que ele importe o componente `Routes` com as rotas configuradas.

Testes realizados no browser.

---

## Instalando e utilizando Styled Components

Adicionamos a biblioteca Styled Components. Ela serve para trabalhar com estilização escopada nos componentes do ReactJS (ou React Native), isso faz com que a estilização de um componente não interfira na estilização de outro. Além disso, essa biblioteca possui características semelhantes aos pré-processadores como o SASS/Less e é possível encadear CSS. Também conseguimos acessar as propriedades do componente estilizado, aplicar estilização condicional, dentre outros recursos.

```
yarn add styled-components
```

Para trabalhar em arquivos da Styled Components, também é necessário ter a biblioteca `vscode-styled-components` instalada para que o highlighting funcione.

Em uma aplicação tradicional, normalmente os elementos HTML com um id ou classe são estilizados através de um único arquivo de CSS ou algo assim. Com o Styled Components cada CSS escopado pertence a um outro componente feito excluisvamente para armazenar a estilização. Quando um Styled Component é utilizado no lugar da tag HTML, ao ser renderizado o elemento e a estilização definidos no Styled Component são aplicados.

Criamos o arquivo `styles.js` dentro da pasta `Main`, que vai guardar cada Styled Component dessa página. Configuramos o Styled Component do título, definimos para utilizar a tag `h1` na renderização, além do CSS utilizando encadeamento e estilização condicional com base em uma propriedade do componente estilizado. Exportamos como o componente estilizado chamado `Title`.

No arquivo `index.js` da pasta `Main` trocamos o `h1` por `Title` e a estilização foi aplicada.

---

## Criação da estilização global no Styled Components

Criamos o arquivo `src/styles/global.js`, onde definimos a estilização global da aplicação através do componente `createGlobalStyle` do Styled Components. Nesse arquivo definimos alguns padrões como remoção de espaços, fontes e cores utilizadas.

Importamos a estilização global no arquivo `src/App.js`. Como agora é preciso exportar dois componentes e no retorno da função só pode ter um, utilizamos o componente `Fragment` (<></>) do React para serivir de container para os componentes `Routes` e `GlobalStyle`.

---

## Estilizando página Main

Antes de começar a estilizar a página Main, definimos como vamos utilizar alguns icones nessa aplicação. Nós podemos utilizar tanto imagens (png/svg) quanto ícones de fontes (optamos por essa).

Instalamos o React Icons, que possui vários pacotes de fontes com ícones, como por exemplo: Font Awesome, Material Icons, Ionicons, dentre outros.

```bash
yarn add react-icons
```

Modificamos o componente `Main` para importar um componente estilizado chamado `Container` e dentro dele definimos um título `h1` com o ícone do pacote Font Awesome (o ícone é importado como um componente).

Dentro do `Container` também adicionamos um componente estilizado pro formulário chamado `Form`, que terá outros elementos filho.

Quando um elemento/componente possuir mais de dois níveis na estilização do CSS é interessante isolarmos ele em outro componente estilizado para entender melhor o código. No caso do `Form`, criamos esse componente pois ao utilizar o elemento `form` comum, o terceiro nível seria alcançado nos filhos dele a partir do componente `Container` (Container>Form>input).

Dentro do componente estilizado `Form` definimos um campo `input`. Também definimos um botão como componente estilizado `SubmitButton`. Utilizamos um componente estilizado pro botão pois ele terá o CSS alterado com base em uma propriedade (`disabled`) - essa propriedade mudará de valor caso o usuário clique para buscar informações de um repositório.

Com o Styled Components também é possível adicionar propriedades ao componente antes da exportação do arquivo de estilização. No componente estilizado `SubmitButton` definimos para que ele retorne com o atributo `type` preenchido com `submit`.

---

## Main | Adicionando repositório e lista de repositórios ao estado da aplicação

Para trabalhar com os dados modificamos o componente `Main` para ser um componente de classe para utilizarmos o estado. Também foi necessário adicionar uma configuração no `.eslintrc` para ignorar a propriedade `state` definida fora de construtor.

Criamos o método `handleInputChange`, responsável por guardar a informação que o usuário digita na propriedade `newRepo`. Associamos o método ao campo `input` através da propriedade `onChange`. No campo `input` também definimos que o valor do campo é igual ao valor armazenado no estado (para refletir a alteração quando limparmos essa propriedade após adicionar o item na lista).

Criamos o método `handleSubmit`, responsável por buscar o dado de `newRepo` no estado, buscar também os dados da lista `repositories`, unir os dados em um novo Array, setar o novo estado com esse novo Array (conceito de imutabilidade) e limpar a propriedade `newRepo` (que ao ser limpa reflete a alteração no campo `input`). Por enquanto a lista `repositories` guarda apenas strings, e será modificada para guardar as informações que virão da API do GitHub.

Utilizando o React Developer Tools verificamos o estado sendo alterado.

---

## Main | Instalando Axios e preenchendo propriedade do estado com dados da API

Para buscar informações em uma API REST externa, poderíamos utilizar o `fetch` do próprio JavaScript, contudo, vamos utilizar uma biblioteca chamada `axios` para poder configurar algumas opções (como a URL base).

```
yarn add axios
```

Consultamos na documentação do GitHub como acessar este recurso através do método GET [https://developer.github.com/v3/repos/#get](https://developer.github.com/v3/repos/#get).

Criamos o arquivo `services/api` com a configuração do Axios e definimos a URL Base (https://api.github.com/repos/).

No componente `Main` importamos o arquivo `api` para fazer uma requisição GET quando o método `handleSubmit` é executado. Como a requisição é assíncrona, adicionamos async/await ao método. Após o retorno de todos os dados, criamos um novo objeto para guardar o dado `name` em um novo objeto (`repository`) e adicionamos ele na lista de objetos (`repositories`).

Utilizando o React Developer Tools verificamos o estado sendo alterado.

---

## Main | Bloqueando botão de envio até a conclusão da chamada a API

Para que o usuário não envie o dado do campo de texto várias vezes seguidas foi necessário desabilitar o botão de envio temporáriamente. Adicionamos a propriedade `loading` ao estado, setamos ela como `true` antes de fazer a requisição a API e depois da requisição setamos como `false`. No componente `Button` passamos o dado `loading` na propriedade `loading-data` (só `loading` dava erro no console) e no Styled Component (dentro de `Main/styles.js`) setamos o botão como `disabled` de acordo com o valor de `loading-data`. Definimos também uma estilização de botão apagado quando o `disabled` é verdadeiro.

---

Devido ao grande número de requisições para a API do GitHub foi necessário configurar o acesso através de um client_id e do secret_id informados na URL no momento da requisição. Dados disponíveis em: [https://github.com/settings/developers](https://github.com/settings/developers)

---

## Main | Exibindo e animando ícone de carregamento até conclusão da chamada a API

Importamos o componente `FaSpinner` que retorna o ícone de carregamento. Utilizamos um _condicional rendering_ através da propriedade `loading` do estado: caso o dado seja `true` só o `FaSpinner` aparece, caso o dado seja `false` só o `FaPlus` aparece.

Para fazer o spinner girar utilizamos os componentes `keyframes` e o `css` do Styled Components.

Fora da estilização do button, o `keyframes` foi utilizado para criar a animação semelhante ao que faríamos no CSS, contudo, guardamos em uma constante chamada `rotate`.

O componente `css` permite retornar um pedaço de CSS dentro de uma expressão JavaScript. Dentro da estilização do button, abrimos uma expressão e criamos uma condicional para adicionar um pedaço de CSS. Se o `loading-data` for `true` o código com o `animate` e a constante `rotate` dentro dele é executado.

(Também dava pra ser feito colocando o `svg{animate...}` dentro do `&[disabled]`)

Para dar tempo de ver o botão carregando alteramos a conexão paga 3G na aba Network do Chrome.

---

## Main | Listando repositórios

Estilizamos um elemento ul exportado como `List` do Styled Component. No componente `Main` importamos o componente `List`, dentro dele percorremos a propriedade `repositories` do estado e criamos um elemento li por repositório com o nome e um link para acessar os detalhes (por enquanto está fake).

---

## Main | Salvando lista de repositórios localmente utilizando localStorage

Para guardar a lista de repositórios localmente utilizamos a API localStorage do browser, assim não perdemos os dados ao recarregar a página.

Setamos os métodos do ciclo de vida do React para regatar ou gravar os dados localmente. Utilizamos o método `componentDidUpdate` (quanto um item é adicionado) para guardar o estado da aplicação na lista local e utilizamos o `componentDidMount` (quando a página é recarregada) para resgatar os dados da lista local e atualizar o estado da aplicação.

---

## Main | Configurando Links

Para criar criar um link que vai para outra página sem recarregar o navegador temos duas possibilidades: utilizar o componente `Link` do React Router DOM ou através do JavaScript utilizando o `this.props.navigation`. Utilizamos a primeira opção. Para o navegador não recarregar não podemos utilizar a tag `<a>` do HTML diretamente.

No componente `Main` importamos e incluímos o componente `Link`, informando na propriedade `to` a página `/repositories` mais o nome armazenado na propriedade do estado `repository`. Esse nome será recebido na página `/repository` como um parâmetro da URL (route params).

## Repository | Configurando recebimento de parâmetro

Como o nome do repositório é escrito `nome_usuario/nome_repositorio` com uma barra (`/`) no meio e pro React Router DOM isso significa um acesso a outra pasta/rota, foi necessário realizar o encode a barra ser interpretada como um caracter especial (resultando no código `%2F` aparecendo na barra de endereços ao invés da barra).

No componente `src/routes.js`, definimos que o endereço `/repository` receberá um parâmetro na URL (ficando `/repository/:repository`, semelhante ao Node.js).

A conversão anterior foi necessária pois ao acessar o endereço `repository/nome_usuario/nome_repositorio`, devido a configuração feita em `routes.js`, apenas o caminho entre as barras é considerado (`repository/_PARAMETRO_CONSIDERADO_/nome_repositorio`) para ser armazenado no parâmetro `:repository` (e por isso não podemos ter barras no parâmetro).

No componente `Routes` buscamos o parâmetro `:repository`, que por estar codificado retorna a string completa. Decodificamos a string (pra barra voltar a aparecer) e exibimos o resultado no browser. O dado dessa string, que depende do endereço acessado, será utilizada para buscar os dados na API do GitHub.

---

## Repository | Buscando dados na API do GitHub com base no parâmetro da URL

Como a rota `/repository` exibirá os dados buscados, foi necessário transformar o componente de função em um componente de classe para utilização do estado.

Utilizamos o método do ciclo de vida `componentDidMount` (com `async`) para fazer a chamada pra API do GitHub assim que o usuário entra na página. Nele utilizamos o método `Promisse.all` para que as requisições sejam feitas em paralelo (ao invés de uma após a outra). Desestruturamos o Array retornado e exibimos os resultados no console.

Na requisição pelas `issues`, utilizamos alguns filtros informando os Query Params (`/?state=&per_page=`) pro axios através da propriedade `params`. São retornadas apenas 5 issues abertas.

---

## Repository | Exibindo tela de carragamento até o retorno da API

Criamos o Styled Component `Loading` para ser exibido enquanto os dados da API não chegam. No componente `Repository` importamos e verificamos se a propriedade `loading` do estado é `true` antes de exibir o componente estilizado `Loading`.

---

## Estilização | Reaproveitando CSS do componente estilizado Container

Os Styled Components que não possuem nenhuma lógica dentro deles podem ser reaproveitados em mais de um lugar.

Recortamos o `Container` do arquivo `src/Main/styles.js` e adicionamos em um novo arquivo `src/components/Container/index.js`. É uma boa prática sempre criar uma pasta por componente e um arquivo `index.js`, assim, fica melhor para adicionar novos arquivos referente aquele componente (como `styles.js`) caso necessário.

Como o componente estilizado `Container` agora é o único no arquivo modificamos também o tipo de exportação para que ele seja exportado como padrão (`export default`). Assim também não precisamos utilizar desestruturação na importação.

Modificamos o componente `Main` para importar o componente estilizado `Container` sem utilizar a desestruturação.

Modificamos o componente `Repository` para importar o componente estilizado `Container` e modificamos a estrutura do JSX dentro do método `render` para que todo o conteúdo fique dentro do `Container`.

---

## Repository | Exibindo dados do repositório

Modificamos o componente `Repository` para exibir alguns dos dados de `repository` retornados pela API do GitHub. Criamos a estrutura e a estilização no novo componente estilizado `Owner`. Também adicionamos um link para voltar para a tela de repositórios.

---

## Repository | Exibindo Issues do repositório

Modificamos o componente `Repository` para exibir alguns os dados de `issues` retornados pela API do GitHub. Criamos a estrutura e a estilização no novo componente estilizado `IssueList`.

---

## Repository | Exibindo labels de cada issue do repositório

Modificamos o componente `Repository` para exibir as labels de cada issue listada. Modificamos a estrutura e o CSS no componente estilizado `IssueList`.

---

## Validação das propriedades do componente com o módulo prop-types

É necessário validar todas as propriedades de um componente (mesmo aquelas preenchidas de maneira automática). No componente `Repository`, precisamos validar a proprieade `match` (que é preenchida automaticamente pelo React Router DOM).

Para fazer a validação, instalamos o módulo `prop-types`:

```bash
yarn add prop-types
```

No componente `Repository` importamos o `prop-types`, criamos a variável estática `propTypes` dentro da classe e realizamos as devidas validações na propriedade `match` do componente.

Também foi necessário indicar pro ESLint ignorar a declaração da variável estática dentro da classe.

---

## Main | Alterando estilização em caso de erro

Um `try/catch` adicionado ao método `handleSubmit` do componente `Main` para capturar possíveis erros.

A propriedade `error` foi criada no estado e é setada para `true` toda vez que um erro é disparado.

Styled Component `Form` alterado para modificar a estilização do campo onde o repositório é digitado com base na propriedade `error`. Quando um erro é disparado o campo de texto treme e fica com a borda vermelha.

---

## Main | Validando se o repositório já existe na lista de repositórios

Método `filter` utilizado para verificar se um repositório já existe antes de fazer buscar na API.

Caso o repositório já exista, disparamos um erro (caindo no catch criado anteriormente).

O campo não estava tremendo no caso de um erro após o outro (pois já estava estilizado), por isso, dentro do `catch`, foi necessário setar a propriedade do estado `error` para `false` antes de setar para `true` após 1 milisegundo (`setTimeout` utilizado) pro CSS retirar e colocar a estilização novamente.

Animação CSS de erro atualizada.

---

## Repository | Filtragem das Issues

### Buscando as Issues pelo filtro

O componente estilizado `IssueFilter` foi criado para exibir as Issues de acordo com o dado informado no filtro. Para guardar todos possíveis dados do filtro foi criada a propriedade do estado `repoStates` e para guardar qual o filtro atual também foi criada a propriedade do estado `repoState`.

Na estrutura, para criar uma lista de botões, percorremos o `repoStates` com o método `map` e para cada item, verificamos se o nome de cada item percorrido é igual ao nome do filtro atual (`repoState`) para setar a classe `active` e também associamos cada botão com o método que faz a ativação do mesmo (`handlerFilter`).

O método `handlerFilter` foi criado e utilizado para fazer uma nova requisição para busca das Issues com base no novo dado do filtro (`repoState`). Como essa requisição também era feita na abertura da página (`componentDidMount`), a requisição foi isolada dentro do método `getIssues`. Dessa maneira, tanto o `componentDidMount`, quanto o `handleFilter` utilizam o método `getIssues` para buscar as Issues de acordo com o filtro informado (`repoState`). Ao final do método `handleFilter` as informações recebidas são guardadas no estado.

O `componentDidMount` também foi modificado para não esperar as duas requisições (`repository` e `issues`) antes de continuar (`Promisse.all` removido), dessa maneira as informações do repositório podem aparecer assim que a busca por elas for concluída.

Também foi criada a propriedade `repoName` no estado, que guarda qual é a página acessada via URL. Dessa maneira, esse dado pode ser utilizado tanto no `componentDidMount` quanto no método `getIssues`.

### Loading do filtro

O componente estilizado `LoadingIssues` foi criado para exibir o status de carregamento enquanto a busca por Issues é feita na API. Para guardar o status do carregamento foi criada a propriedade do estado `loadingFilter`.

O método `handlerFilter` foi modificado. No início é verificado se não existe nennhuma requisição em andamento (`loadingFilter` com o valor `true`) e o fluxo só continua se a condição for falsa. Caso o fluxo continue, após o retorno da busca na API, setamos o valor de `loadingFilter` para `false`.

### CSS

A animação de rotação do spinner foi recortada para o arquivo `styles/global.js` para utilização em mais de um componente (no botão de envio no componente `Main` e na lista de Issues no componente `Repository`).

---
