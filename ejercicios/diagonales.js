'use strict';
/*
  Quiero hacer una funcion que admita de parametro un numero
  El numero va a representar el alto y ancho de un array bidimensional
  Quiero meter un simbolo en las diagonales del array
  y quiero sacar esto despues por la consola
*/

function matrixPersonalizada(num, simboloRelleno, simboloDiagonal) {
  let resultado = [];
  for (let fila = 0; fila < num; fila++) {
    resultado.push([]);
    for (let columna = 0; columna < num; columna++) {
      resultado[fila][columna] = simboloRelleno;
      resultado[fila][fila] = simboloDiagonal;
      resultado[fila][num - (fila + 1)] = simboloDiagonal;
    }
  }
  return resultado;
}

console.log(matrixPersonalizada(5, '💻', '🧯'));
