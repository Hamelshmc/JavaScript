'use strict';
/*
  Quiero hacer una funcion que admita de parametro un numero
  El numero va a representar el alto y ancho de un array bidimensional
  Quiero meter un simbolo en las diagonales del array
  y quiero sacar esto despues por la consola
*/

function matrix(num) {
  let resultado = [];
  for (let a = 0; a < num; a++) {
    resultado.push([]);
    for (let b = 0; b < num; b++) {
      resultado[a][b] = '*';
    }
  }
  pintarDiagonales(resultado, 'H');
  return resultado;
}

function pintarDiagonales(arr, simbolo) {
  let menos = arr.length - 1;
  for (let index = 0; index < arr.length; index++) {
    arr[index][index] = simbolo;
    arr[index][menos--] = simbolo;
  }
  return arr;
}

function matrixPersonalizada(num, simboloRelleno, simboloDiagonal) {
  let resultado = [];
  for (let a = 0; a < num; a++) {
    resultado.push([]);
    for (let b = 0; b < num; b++) {
      resultado[a][b] = simboloRelleno;
    }
  }
  pintarDiagonales(resultado, simboloDiagonal);
  return resultado;
}

console.log(matrix(4));

console.log(matrixPersonalizada(5, '💻', '🧯'));
