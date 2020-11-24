'use strict';
// // Esto es un comentario de una linea
// /** Comentario en bloque  */

// let cuandoEmpezoCovid19 = 2020;

// console.log(cuandoEmpezoCovid19);

// console.log('Hello World');
// console.warn('Warning');
// console.error('Error');

// typeOf para consultar el tipo de variable
// operador ternario
// let frase = edad <= 18 ? 'Es mayor de edad' : 'Es menor de edad';
// function hola(mensaje) {
//    return mensaje;
//  }

// function past(horas, minutos, segundos) {
//   let resultado = 0;
//   if (horas > 0 || minutos > 0 || segundos > 0) {
//     resultado = horas * 3600000 + minutos * 60000 + segundos * 1000;
//   }
//   return resultado;
// }
// console.log(past(0, 1, 1))

// users

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual que el anterior,
  la diferencia es que el que estaba inicialmente infectado al dia siguiente esta sano
  */

// const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];

// const infected2 = [false, true, false, true, false, true, false, false];

// function comprobarSiHayElemento(arr, index, contagiado) {
//   if (arr[index] !== undefined) {
//     arr[index] = contagiado;
//   }
// }

// function consultaMedica(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = true;
//       comprobarSiHayElemento(resultado, index - 1, true);
//       comprobarSiHayElemento(resultado, index + 1, true);
//     }
//   }
//   return resultado;
// }

// function consultaMedica2(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = false;
//     } else if (arr[index] === arr[index + 1] && arr[index] === arr[index - 1]) {
//       resultado[index] = false;
//     } else {
//       resultado[index] = true;
//     }
//   }
//   return resultado;
// }
// console.log(patients);
// console.log(consultaMedica(patients));
// console.log(consultaMedica2(patients));

// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacci2(n) {
//   let resultado;
//   for (let index = 1; index < n; index++) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       resultado = index + 1 - index + 2;
//     }
//   }
//   return resultado;
// }

// console.log(fibonacci(8));
// console.log(fibonacci2(8));

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

console.log(matrix(4));

console.log(matrixPersonalizada(5, '💻', '🧯'));

/**
 * Procedure OrdenarBurbuja;
Begin
 clrscr;
 For i:=1 to va_n - 1 do Recorre el vector
 Begin
 For j:=1 to va_n - 1 do Recorre el vector ordenando
 Begin
 If ( vv_vector[j] > vv_vector[j+1] ) Then  Pregunta para ordenar de
menor a mayor
 Begin
 va_aux:=vv_vector[j];
 vv_vector[j]:=vv_vector[j+1];
 vv_vector[j+1]:=va_aux;
 End;
 End;
 En
 */

function ordenarBurbujaAsc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let n = 0; n < array.length; n++) {
      if (array[n] > array[n + 1]) {
        let variableTemporal = array[n];
        array[n] = array[n + 1];
        array[n + 1] = variableTemporal;
      }
    }
  }
  return array;
}

function ordenarBurbujaDesc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let n = 0; n < array.length; n++) {
      if (array[n] < array[n + 1]) {
        let variableTemporal = array[n];
        array[n] = array[n + 1];
        array[n + 1] = variableTemporal;
      }
    }
  }
  return array;
}

const desordenado = [6, 7, 2, 8, 1];
const ordenado = [1, 2, 6, 7, 8];

console.log(ordenarBurbujaAsc(desordenado));
console.log(ordenarBurbujaDesc(desordenado));
