'use strict';

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log('Vuelta', i);
}

function hey() {
  console.log('hey');
  return 'lo que sea';
}

let resultado = 2;
resultado = hey();
console.log(resultado);

const pedirleUnNumeroAlUsuario = +prompt('Ola k ase');

console.log(pedirleUnNumeroAlUsuario);

console.log(Math.random() * 10);
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

const aleatorio = Math.round(Math.random() * 10);
console.log(aleatorio);

/*
Hacer una funcion a la que se le pasa un parámetro
El parámetro va a ser un número
El número indica la cantidad de pisos de una pirámide

Las piramides a continuación se han generado pasando un 5 a la función
PIRAMIDE 0
1
2
3
4
5

PIRAMIDE 1
*
**
***
****
*****

  PIRAMIDE 2
    *
   **
  ***
 ****
*****

PIRAMIDE 3

    *
   ***
  *****
 *******
*********

PIRAMIDE 4

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

// Piramide 0

function pyramid0(numPisos) {
  for (let i = 0; i < numPisos; i++) {
    console.log(i + 1);
  }
}

pyramid0(5);

// Piramide 1

function pyramid1(height) {
  for (let i = 0; i < height; i++) {
    let piso = '';

    for (let j = 0; j <= i; j++) {
      piso = piso + '*';
    }

    console.log(piso);
  }
}

pyramid1(5);

// Piramide 2

// PASO 1

function pyramid2(altura) {
  for (let i = 0; i < altura; i++) {
    let piso = '';

    // El problema aqui es que en los dos bucles tengo basicamente el mismo codigo
    // Seria mejor sacarlo a una funcion

    for (let j = 0; j < altura - (i + 1); j++) {
      piso = piso + ' ';
    }

    for (let j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }

    console.log(piso);
  }
}

pyramid2(5);

// PASO 2

function buildFloor(i, altura) {
  let piso = '';

  //OK pero sigue habiendo codigo repetido en los bucles

  for (let j = 0; j < altura - (i + 1); j++) {
    piso = piso + ' ';
  }

  for (let j = 0; j < i + 1; j++) {
    piso = piso + '*';
  }
  return piso;
}

function pyramid2(altura) {
  for (let i = 0; i < altura; i++) {
    let piso = buildFloor(i, altura);
    console.log(piso);
  }
}

pyramid2(5);

// PASO 3

function createFragment(ammout, theSymbol) {
  let piso = '';

  for (let j = 0; j < ammout; j++) {
    piso = piso + theSymbol;
  }

  return piso;
}

function buildFloor(i, altura) {
  // La variable piso parece que sobra

  let piso = '';

  piso = piso + createFragment(altura - (i + 1), ' ');
  piso = piso + createFragment(i + 1, '*');

  return piso;
}

function pyramid2(altura) {
  for (let i = 0; i < altura; i++) {
    let piso = buildFloor(i, altura);
    console.log(piso);
  }
}

pyramid2(5);

// PASO 4

function createFragment(ammout, theSymbol) {
  let piso = '';

  for (let j = 0; j < ammout; j++) {
    piso = piso + theSymbol;
  }

  return piso;
}

function buildFloor(i, altura) {
  return createFragment(altura - (i + 1), ' ') + createFragment(i + 1, '*');
}

function pyramid2(altura) {
  for (let i = 0; i < altura; i++) {
    let piso = buildFloor(i, altura);
    console.log(piso);
  }
}

pyramid2(5);

// PIRAMIDE 3

function createFragment(ammout, theSymbol) {
  let piso = '';

  for (let j = 0; j < ammout; j++) {
    piso = piso + theSymbol;
  }

  return piso;
}

function buildFloor(i, altura) {
  return createFragment(altura - (i + 1), ' ') + createFragment(i * 2 + 1, '*');
}

function pyramid3(altura) {
  for (let i = 0; i < altura; i++) {
    let piso = buildFloor(i, altura);
    console.log(piso);
  }
}

pyramid3(5);
