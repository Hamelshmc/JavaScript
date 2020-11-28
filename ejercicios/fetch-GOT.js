/*
Recuperar los datos de la casa Targaryen de juego de la API de Game of Thrones, de esta casa deberemos averiguar cual es el Lord actual (almacenado en currentLord) y recuperar sus datos, los del lord.

Del lord actual debemos sacar por la consola el nombre (name), y los titulos (titles) cada uno en una linea por consola.

Enlace para hacer fetch https://www.anapioficeandfire.com/api/houses/378
*/

function datosCasaTargaryen2() {
  const url = 'https://www.anapioficeandfire.com/api/houses/378';
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((datos) => lordActual2(datos.currentLord));
}

function lordActual2(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      console.log(' FETCH NO GUAY', datos.name);
      for (const title of datos.titles) {
        console.log(title);
      }
    });
}
async function datosCasaTargaryen() {
  const url = 'https://www.anapioficeandfire.com/api/houses/378';
  const datos = await (await fetch(url)).json();
  await lordActual(datos.currentLord);
}

async function lordActual(url) {
  const datos = await (await fetch(url)).json();
  console.log('ASYNC', datos.name);
  for (const title of datos.titles) {
    console.log(title);
  }
}

datosCasaTargaryen2();
datosCasaTargaryen();
