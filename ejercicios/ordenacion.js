'use strict';
/*
  Quiero hacer una funcion que admita un parametro de entrada
  Este parametro va a ser un array de numeros
  NO VOY A USAR ARRAY.SORT
  La funcion devuelve un array ordenado
  No modifico el original
*/

const desordenado = [6, 7, 2, 8, 1];
const ordenado = [1, 2, 6, 7, 8];

function ordenarBurbuja(items) {
  for (let i = 0; i < items.length; i++) {
    for (let n = 0; n < items.length; n++) {
      if (items[n] > items[n + 1]) {
        ([items[n], items[n + 1]] = items[n + 1]), items[n]; // INTERCAMBIO
      }
    }
  }
  return items;
}

function ordenarSeleccion(items) {
  for (let i = 0; i < items.length; i++) {
    let menor = { posicion: i, valor: items[i] };
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < menor.valor) {
        menor = { posicion: j, valor: items[j] };
      }
    }
    items[menor.posicion] = items[i];
    items[i] = menor.valor;
  }
  return items;
}

console.log(ordenarBurbuja(desordenado));
console.log(ordenarSeleccion(desordenado));
