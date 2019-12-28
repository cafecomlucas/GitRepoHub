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
