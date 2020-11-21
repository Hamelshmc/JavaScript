'use strict';
/*
  Quiero hacer una función para desactivar una bomba
  La bomba nos va a dar 5 intentos para desactivar
  Cada intento nos lo pide por el prompt
  Si conseguimos desactivar la bomba saca un mensaje por la consola y no pide mas intentos
  Si agotamos todos los intentos explota
*/
function bomba() {
  let pass = '';
  let intento = 0;
  while (intento < 5) {
    pass = prompt('DESACTIVA LA BOMBA!!');
    console.log('intentalo de nuevo');
    intento++;
    if (intento === 5) {
      return console.log('BOOM!');
    }
    if (+pass === Math.floor(Math.random() * 10)) {
      console.log('has desactivado la bomba!');
      intento = 6;
    }
  }
}

bomba();

// Solución Profe

function bomb(numeroIntentos) {
  const password = Math.round(Math.random() * 10);

  for (let index = 0; index < numeroIntentos; index++) {
    const guess = +prompt('Mete un codigo');
    if (guess === password) {
      return true;
    }
  }
  return false;
}

function playBomb(numeroIntentos) {
  if (bomb(numeroIntentos)) {
    console.log('desactivada');
  }
  console.log('BOOM!');
}

playBomb(5);
