'use strict';

const numberOfUsers = 100;
const apiUrl = `https://randomuser.me/api/?results=${numberOfUsers}`;

const main = document.querySelector('main');

async function getDataUsersRandoms(url) {
  const data = await (await fetch(url)).json();
  for (const iterator of data.results) {
    template(iterator);
  }
}

getDataUsersRandoms(apiUrl);

function template(user) {
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

  img.setAttribute('src', user.picture.large);
  h1.textContent = `${user.name.first} ${user.name.last}`;
  p.textContent = `${user.location.state} (${user.location.country}), ${user.dob.date.substr(0, 4)}`;
}
