<h1 align="center">
    <div><img alt="Ecoleta" title="Ecoleta" src=".github/ecoleta.svg" width="220px" /></div>
</h1>

<p align="center">
  <a href="#bookmark-descri%C3%A7%C3%A3o">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#world_map-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man_technologist-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licen%C3%A7a">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>
<h1 align="center">Preview</h1>
<p align="center">
  <img alt="Ecoleta" src=".github/ecoleta_final.png" width="100%">
</p>

# :bookmark: Descrição
 App feito durante a 1ª Next Level Week - NLW2020-1, da [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/)</br>
Veja mais em: [github/Rocketseat/nlw-01-booster](https://github.com/Rocketseat/nlw-01-booster#-projeto).

# :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [API REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

# :computer: Projeto

O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.

API REST com app WEB e Mobile feita em Typescript, HTML, CSS, Node.js, ReactJS, React Native e Expo.

Aplicativo de demonstração tanto em WEB quanto para celulares tantop Android quanto iOS.

## Código bem completo com diversos exemplos de funcionalidades
### Resumo da utilidade:
Aplicativo para cadastro e visualização de pontos de coleta de lixo seletiva, com filtros que permitem buscar até seis tipos de resíduos diferentes:
1. Lâmpadas
2. Pilhas e Baterias
3. Papéis e Papelão
4. Resíduos Eletrônicos
5. Resíduos Orgânicos
6. Óleo de Cozinha

## Sobre a arquitetura do código:
Este código possui três partes, sendo construído em typescipt com as ferramentos Node.js, ReactJS, React Native e Expo:
1. Servidor - API REST. Usado como Back-end da aplicação, com banco de dados em SQLite e linguagem Javascript e Typescript.
2. Página WEB - Aplicativo funcional no qual se pode cadastrar novos pontos de coleta, incluindo imagens da fachada ou do local.
3. Aplicativo móvel - Multiplataforma para celular Android e iOS, permite a visualização e busca por local para descarte dos resíduos.

# :world_map: Layout

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

# :thinking: Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

# :man_technologist: Como executar

1. Em cada uma das 3 pastas (mobile, server e web) faça:
```
yarn install
```
ou
```
npm install.
```
2. Na pasta server faça:
```
yarn dev
```
ou
```
npm run dev
```
1. Nas pastas web e mobile faça:
```
yarn start
```
ou
```
npm run start
```
4. No aplicativo EXPO em seu celular, abra o QRCode apresentado no painel web o expo do computador.

# :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
