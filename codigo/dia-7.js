"use strict";

// Comentario de una linea

/*
Este es de
varias lineas
*/

let myLet = 14;
const myConst = [];

const resultadoNumero = (1 + 2 - (3 * 4) / 5) % 6;
const resultadoString = "Hola " + "mundo";
const templateLiterals = `Estas pueden ocupar
varias lineas y les puedo meter valores por el medio ${myLet}`;
const resultadoLogicas = (!true && false) || true;

const user = { name: "Ana", age: 7 };

if (user.age >= 67) {
  console.log("Jubilao");
} else if (user.age >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

const esAdulto = user.age >= 18 ? true : false;

for (let contador = 0; contador < 5; contador++) {
  console.log(contador);
}

const myArray = [9, 8, 7, 6, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myObject = {
  a: 16,
  b: true,
  c: [9, 8, 7],
};

const myObjectCopy = { ...myObject, ...user, data: false };

myObject.test = 3;
console.log(myObjectCopy);

console.log(Object.keys(myObject));
console.log(Object.values(myObject));

console.log(myObject.test);

const myArray = ["Inicial"];

myArray.push("PUSH");
myArray.unshift("UNSHIFT");

console.log(myArray.indexOf("PUSH"));

const loQueSaqueConPop = myArray.pop();
const loQueSaqueConShift = myArray.shift();

console.log(myArray);

const numericos = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const unCacho = numericos.slice(2, 6);
console.log(unCacho);

function factorial(theNumber) {
  if (theNumber === 1) {
    return 1;
  }
  return theNumber * factorial(theNumber - 1);
}

console.log(factorial(5));

function factorialNoRecursivo(theNumber) {
  let result = 1;

  for (let i = 1; i <= theNumber; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorialNoRecursivo(5));

const suma = function (a, b) {
  return a + b;
};

const sumaArrow = (a, b) => {
  return a + b;
};

const sumaReturnImplicito = (a, b) => a + b;

console.log("SUMA", suma(3, 5));
console.log("SUMA ARROW", sumaArrow(3, 5));
console.log("SUMA ARROW RETURN IMPLICITO", sumaReturnImplicito(3, 5));

function test(callback) {
  callback();
}

const holi = () => {
  console.log("Holi");
};

test(holi);

const algunosNumeros = [9, 8, 7, 6, 5];

algunosNumeros.forEach((value, index) => {
  console.log(index, value);
  if (value === 7) {
    return;
  }
});

// Esto es equivalente al foreach de arriba

for (let i = 0; i < algunosNumeros.length; i++) {
  console.log(i, algunosNumeros[i]);
}

for (const numero of algunosNumeros) {
  if (numero === 7) {
    continue;
  }
  console.log("for...of", numero);
}

const users = [{ name: "Ivan" }, { name: "Ana" }, { name: "Patricia" }];

const userCallback = (user, index) => {
  console.log(user, index);
};
console.log(users);

users.forEach(userCallback);

const matrix = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

matrix[1][1] = "💩";
console.log(matrix);

function factorial(theNumber) {
  if (theNumber === 1) {
    return { result: 1, counter: 1 };
  }

  const previousFactorial = factorial(theNumber - 1);

  return {
    result: theNumber * previousFactorial.result,
    counter: previousFactorial.counter + 1,
  };
}

console.log(factorial(5));
