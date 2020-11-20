// Funcion sin parametros ni return
function hola() {
  console.log("hola");
}

hola();

// Funcion con un parametro y sin return

function double(ammount) {
  const doubleAmmount = ammount * 2;
  console.log(doubleAmmount);
}

double(2);
double(3);
double(4);

// Funcion con varios parametros sin return

function multiply(parameter1, parameter2) {
  console.log(parameter1 * parameter2);
}

const width = 10;
const heigth = 5;

multiply(width, heigth);

// Funcion pura con parametros y return

function multiply(parameter1, parameter2) {
  return parameter1 * parameter2;
}

const result = multiply(50, 34);
console.log(result);

// Bucles

// While

let counter = 0;
while (counter <= 100) {
  console.log(counter);
  counter++;
}

// do...while
counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter <= 100);

// For
function double(ammount) {
  return ammount * 2;
}

for (let i = 0; i < 100; i++) {
  console.log(double(i));
}
