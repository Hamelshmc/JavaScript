"use strict";

// Esto es un comentario de una linea

/* Este comentario
puede ocupar
varias lineas
*/

let numeroFavorito = 14;

console.log("Hola", numeroFavorito, 27);
console.warn("Hola");
console.error("El usuario no se ha identificado");

// Boolean
const myTrue = true;
const myFalse = false;

// Null
const myNull = null;

// Undefined
let myUndefined;

console.log(myTrue);
console.log(myFalse);
console.log(myNull);
console.log(myUndefined);

// Number
let myNumber = 0;
myNumber = 123123123;
myNumber = -50;
myNumber = 0.4;
myNumber = -15.3;

myNumber = -Infinity;
myNumber = +Infinity;

myNumber = NaN;

const name = "Ivan";
const age = 30;

let myString = "Esto es un string";
myString = `Esto tambien es un string
que puede ocupar varias lineas
`;

let saludo = `Hola ${name} tiene ${age} años 💩`;
saludo = "Hola " + name + " tiene " + age + " años 💩";
console.log(typeof saludo);

let myValue = 10 + 4;
myValue = 10 - 4;
myValue = 10 * 4;
myValue = 10 / 4;

myValue = 10 % 3;

myValue = 0;
myValue = myValue + 1;
myValue++;
myValue--;

myValue += 10;
myValue -= 10;

myValue = 10 ** 4;

myValue = +"14";

myValue = "Hack " + "A " + "Boss";

let a, b, c;

a = b = c = 15;

console.log(a, b, c);
