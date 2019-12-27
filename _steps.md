## Criação da aplicação

O React possui o cli onde é possível gerar um projeto automáticamente com o Babel e o Webpack (com os loaders de CSS, imagens, etc) já configurados e encapsulados em outra biblioteca. Ao utilizar esse comando o git também é inicializado automaticamente.

Geramos um novo projeto através do comando `yarn create react-app`:

```bash
yarn create react-app rocketseat_05_reactjs-github-api
```

```bash
cd rocketseat_05_reactjs-github-api/
```

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

Ao digitar `yarn start` o projeto já abre automaticamente no navegador exibindo o logo do React.

---
