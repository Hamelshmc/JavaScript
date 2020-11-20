'use strict';
/*
  - Hacer una funcion que diga si un número es divisible entre otro
    Para esto podeis usar el operador de modulo
    Esta función devuelve true si es divisible y false si no es divisible
    Un numero es divisible entre otro cuando el resto de su division es 0

    - Otra funcion que puede usar la que acabamos de hacer y que diga si un numero es primo o no
  va a devolver true si es primo y false si no es primo
  Un numero es primo si solo es divisible entre 1 y el mismo
  Solo probamos numeros enteros, numeros >0. A mi me vale si asumis que el numero siempre va a ser >=2

    - Una ultima funcion que saca los numeros primos hasta el 100
  */

function numeroEsDivisible(numeroAComprobar, numero) {
  return numeroAComprobar % numero === 0;
}

function comprobarSiEsPrimo(numeroAComprobar) {
  for (let index = 2; index < numeroAComprobar - 1; index++) {
    if (numeroEsDivisible(numeroAComprobar, index)) {
      return false;
    }
  }
  return true;
}

function primosHastaElX(x) {
  for (let index = 0; index < x; index++) {
    if (comprobarSiEsPrimo(index)) {
      console.log(index);
    }
  }
}

primosHastaElX(100);
