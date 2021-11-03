 Olá a todos!! \o/ 
 
Nesse Projeto foi utilizado Typescript | ReactJs | Styled-Components | MirageJs
<p>O site está no ar, porem o back-end é uma api fake feita com o Mirage, então só o front-end está disponível. </p>

<p>Na construção desse Projeto pude colocar em prática tudo que havia aprendido no projeto @github-explorer(Components, Properties, State), com alguns diferenciais como UseContext, Styled-Components e MirageJs. Utilizando todas as boas práticas que o mercado atual utiliza.</p>

![project](https://user-images.githubusercontent.com/83384060/140013603-26944d31-4e12-4e75-a0dc-49df1c554d6d.jpeg)

<h1>Desafio</h1>

<h3>1) Criar a página</h3>
<ul>
 <li>Layout: <a href="https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1"> figma </a></li>
<ul>
 
 <h3>1.1) Criando a estrutura do projeto com React e Styled components.</h3>
 <p> desde o Header até finalizar com o Dashboard recebendo a TransactionTable e o Summary. </p>
  
 <h3>1.2) Importando o Modal do React e dando estilo. </h3>
 <p> Para instalar o Modal basta utilizar <code>$ npm install --save react-modal
$ yarn add react-modal
</code> </p>
 <p> mais informações de como implementar o <a href="https://github.com/reactjs/react-modal"> Modal</a> no projeto. </p>
 
 <h3> O proximo passo é criar uma api fake usando MirageJs para fazer "POST" para os novos dados inseridos e "GET" os dados que foram inseridos na aplicação  </h3>
 
 <p> Caso queira ter um projeto funcional acesse <a href="https://miragejs.com/">MirageJs</a> </p>
 <p>Caso não tenha conhecimento em criar uma api fake ou não queira criar do zero aqui esta a aplicação base do projeto: </p>




<p>Lembre-se de instalar o axios, ele vai servir para abrir uma localhost do nosso projeto. Exemplo abaixo: </p>
<code>import axios from "axios";

 export const api = axios.create({
   baseURL: "http://localhost:3000/api"
 })</code>
 










