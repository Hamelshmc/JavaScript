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

const patients = [true, false, true, false, false, false, true, true];
const infected = [true, true, true, true, false, true, true, true];

const infected2 = [false, true, false, true, false, true, false, false];

function comprobarSiHayElemento(arr, index, contagiado) {
  if (arr[index] !== undefined) {
    arr[index] = contagiado;
  }
}

function consultaMedica(arr) {
  let resultado = [...arr];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      resultado[index] = true;
      comprobarSiHayElemento(resultado, index - 1, true);
      comprobarSiHayElemento(resultado, index + 1, true);
    }
  }
  return resultado;
}

function consultaMedica2(arr) {
  let resultado = [...arr];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      resultado[index] = false;
    } else if (arr[index] === arr[index + 1] && arr[index] === arr[index - 1]) {
       resultado[index] = false;
    } else {
      resultado[index] = true;
    }
  }
  return resultado;
}
console.log(patients);
console.log(consultaMedica(patients));
console.log(consultaMedica2(patients));
