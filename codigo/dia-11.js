'use strict';

const user = { name: 'Ivan', age: 53, address: { street: 'C/ Real', number: 1 } };

const userStringified = JSON.stringify(user);

const parsedUser = JSON.parse(userStringified);

console.log(user, userStringified, parsedUser);

console.log(user === parsedUser, user.address === parsedUser.address);

const ciclico = {};
ciclico.referenciaCircular = ciclico;

JSON.stringify(ciclico);

console.log(ciclico);

const url = 'https://anapioficeandfire.com/api/characters/583';

fetch(url).then((response) => {
  const valuePromise = response.json();
  valuePromise.then((value) => {
    console.log(value);
  });
});

fetch(url).then((response) => {
  response.json().then((value) => {
    console.log(value);
  });
});

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((value) => {
    console.log(value);
  });

function fetchData(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

fetchData(url).then((value) => {
  console.log(value);
});

async function getJohnSnow() {
  const url = 'https://anapioficeandfire.com/api/characters/583';

fetchData(url).then((value) => {
  console.log(value);
});

  const data = await fetchData(url);
  console.log(data);
  return data;
}

console.log(getJohnSnow());

setTimeout(async () => {
  //Aqui quiero usar await
}, timeout);

async function getOtherJohnSnow() {
  const url = 'https://anapioficeandfire.com/api/characters/583';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const dataEnUnPaso = await (await fetch(url)).json();
  console.log(dataEnUnPaso);
}

getOtherJohnSnow();

async function getGente() {
  const url = 'https://anapioficeandfire.com/api/characters/';
  const gentePromise = [];

  for (let i = 1; i < 6; i++) {
    // const persona = await (await fetch(url + i)).json();
    // gente.push(persona);
    gentePromise.push(fetchData(url + i));
  }
  const people = await Promise.all(gentePromise);
  console.log(people);
}

getGente();

async function getGente() {
  const url = 'https://anapioficeandfire.com/api/characters/';
  const gentePromise = [];

  for (let i = 1; i < 6; i++) {
    gentePromise.push(fetchData(url + i));
  }
  const people = await Promise.race(gentePromise);
  console.log(people);
}

getGente();
