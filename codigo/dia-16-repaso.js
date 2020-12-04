'use strict';

const url = 'https://www.anapioficeandfire.com/api/houses/378';

let elDato;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((dato) => {
    elDato = dato;
    console.log(elDato);
  });

async function peticion() {
  const url = 'https://www.anapioficeandfire.com/api/houses/378';

  const data = await (await fetch(url)).json();
  return data;
}
async function a() {
  console.log(await peticion());
}
a();
