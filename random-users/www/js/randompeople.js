'use strict';

// const apiUrl = `https://randomuser.me/api/?results=${numberOfUsers}`;
const apiUrl2 = `https://randomuser.me/api/?results=1`;

const main = document.querySelector('main');

async function getDataUsersRandoms(url) {
  const data = await (await fetch(url)).json();
  console.log(data);
}

getDataUsersRandoms(apiUrl2);

function template({}) {
  const article = document.createElement('article');
  const header = document.createElement('header');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  main.appendChild(article);
  article.appendChild(header);
  header.appendChild(img);
  header.appendChild(h1);
  article.appendChild(p);

  img.setAttribute('src', u);
  h1.textContent = 'hola h1';
  p.textContent = 'hola p';
}
