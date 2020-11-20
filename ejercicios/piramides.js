'use strict';

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

function tamanoPiramide(numero) {
  let resultado = '';
  let punto = '*';
  let salto = '\n';
  for (let fila = 0; fila < numero; fila++) {
    resultado += punto;
    for (let columna = 0; columna < fila; columna++) {
      resultado += punto;
    }
    resultado += salto;
  }
  return resultado;
}

function tamanoPiramide2(numero) {
  let resultado = '';
  let punto = '*';
  let salto = '\n';
  let espacio = ' ';
  let numeroEspacios = numero;
  for (let fila = 0; fila < numero; fila++) {
    for (let columna1 = 0; columna1 < numeroEspacios; columna1++) {
      resultado += espacio;
    }
    numeroEspacios--;
    resultado += punto;
    for (let columna2 = 0; columna2 < fila; columna2++) {
      resultado += punto;
    }
    resultado += salto;
  }
  return resultado;
}

function tamanoPiramide3(numero) {
  let resultado = '';
  let punto = '*';
  let salto = '\n';
  let espacio = ' ';
  let numeroEspacios = numero;
  for (let fila = 0; fila < numero; fila++) {
    for (let columna1 = 0; columna1 < numeroEspacios; columna1++) {
      resultado += espacio;
    }
    numeroEspacios--;
    resultado += punto;
    for (let columna2 = 0; columna2 < fila; columna2++) {
      resultado += punto;
    }
    for (let columna3 = 0; columna3 < fila; columna3++) {
      resultado += punto;
    }
    resultado += salto;
  }
  return resultado;
}

function tamanoPiramide4(numero) {
  let resultado = '';
  let punto = '*';
  let salto = '\n';
  let espacio = ' ';
  let numeroEspacios = numero;
  for (let fila = 0; fila < numero; fila++) {
    for (let columna1 = 0; columna1 < numeroEspacios; columna1++) {
      resultado += espacio;
    }
    numeroEspacios--;
    resultado += punto;
    for (let columna2 = 0; columna2 < fila; columna2++) {
      resultado += punto;
    }
    for (let columna3 = 0; columna3 < fila; columna3++) {
      resultado += punto;
    }
    resultado += salto;
  }
  for (let fila2 = numero; fila2 > 0; fila2--) {
    for (let columna1 = 0; columna1 < numeroEspacios; columna1++) {
      resultado += espacio;
    }
    numeroEspacios++;
    resultado += punto;
    for (let columna2 = 0; columna2 < fila2; columna2++) {
      resultado += punto;
    }
    for (let columna3 = 0; columna3 < fila2; columna3++) {
      resultado += punto;
    }
    resultado += salto;
  }
  for (let ultimaLinea = 0; ultimaLinea < numeroEspacios; ultimaLinea++) {
    resultado += espacio;
  }
  resultado += punto;
  return resultado;
}
console.log(tamanoPiramide(5));
console.log(tamanoPiramide2(5));
console.log(tamanoPiramide3(5));
console.log(tamanoPiramide4(5));


// Solución profe!

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
