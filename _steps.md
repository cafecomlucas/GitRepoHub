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
