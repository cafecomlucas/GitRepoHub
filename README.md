## [Rocketseat] Desafio 05: Aprimorar aplicação que consome API do GitHub

### Aplicação

Aplicação Front-End responsiva com ReactJS que consome API do GitHub. A aplicação adiciona, lista e exibe detalhes de cada repositório. Nos detalhes é possível ver as Issues organizadas por filtro e por página.

Passo a passo documentado em: [https://github.com/cafecomlucas/rocketseat_desafio_05_reactjs_github_api/blob/master/\_steps.md](https://github.com/cafecomlucas/rocketseat_desafio_05_reactjs_github_api/blob/master/_steps.md)

![Demonstração - Busca na API do GitHub e teste de responsividade](.github/reactjs-github-api_GIF.gif)

---

### Como iniciar

1. Clone este repositório usando:

```bash
git clone https://github.com/cafecomlucas/rocketseat_desafio_05_reactjs_github_api.git
```

2. Acesse o diretório criado:

```bash
cd rocketseat_desafio_05_reactjs_github_api
```

3. Instale as dependencias:

```bash
yarn
```

4. Inicie a aplicação web:

```bash
yarn dev
```

---

### Funcionalidades da primeira versão

Até o commit [14122e4...](https://github.com/cafecomlucas/rocketseat_desafio_05_reactjs_github_api/commit/14122e44ee39273f10cb04b54cb36adbe4e23b29) as seguintes funcionalidades foram desenvolvidas:

- Configuração do padrão de código (com EditorConfig, ESLint e Prettier);
- Roteamento no Front-End através do React Router DOM;
- Configuração das rotas `/` e `/repository`;
- Estilização com Styled Components;
- Responsividade e utilização do Flexbox;
- Busca de dados em API externa através de requisições assíncronas
- Adição e listagem de repositórios no componente `Main` (rota `/`);
- Animação do ícone de carregamento até a conclusão da chamada a API;
- Armazenamento local para os dados continuarem aparecendo após o recarregamento da página;
- Exibição de dos detalhes e das Issues de cada repositório no componente `Repository` (rota `/repository/:repository`).

---

### Funcionalidades adicionais (versão do desafio)

Após o commit [14122e4...](https://github.com/cafecomlucas/rocketseat_desafio_05_reactjs_github_api/commit/14122e44ee39273f10cb04b54cb36adbe4e23b29) as seguintes funcionalidades foram adicionadas:

#### Captação de erros

- Captação de erros através do `try/catch` por volta do código presente na função `handleSubmit` do componente `Main`.

Definição de borda vermelha por volta do input onde o usuário digita o nome do repositório caso um repositório não seja encontrado na API do Github.

#### Repositório duplicado

- Verificação de repositório duplicado antes de fazer a chamada à API na função `handleSubmit`, ou seja, se ele ainda não existe no estado de `repositories`.

Caso exista um repositório duplicado, o erro abaixo é disparado, caindo no `catch` do `try/catch` criado na funcionalidade anterior.

```js
throw new Error('Repositório duplicado');
```

#### Filtro de estado

- Filtro de estado na listagem de Issues no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

Exemplos de requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?state=all
https://api.github.com/repos/rocketseat/unform/issues?state=open
https://api.github.com/repos/rocketseat/unform/issues?state=closed
```

Documentação [nesse link](https://developer.github.com/v3/issues/#parameters-1);

#### Paginação e botões

- Paginação das Issues listadas no detalhe do repositório. A API do Github lista no máximo 30 issues por página e é possível controlar o número da página atual por um parâmetro no endereço da requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?page=2
```

- Botões de próxima página e página anterior. O botão de página anterior deve ficar desativado na primeira página.
