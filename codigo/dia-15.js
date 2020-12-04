'use strict';

class Person {
  name;
  constructor(name) {
    this.name = name;
  }

  saludar() {
    console.log(`Hola soy ${this.name}`);
  }
}

class Police extends Person {
  numeroDePlaca;
  constructor(name, numeroDePlaca) {
    super(name);
    this.numeroDePlaca = numeroDePlaca;
  }

  detener() {
    console.log('ALTO MANGANTE!');
  }
}

const myPerson = new Person('Ana');
const myPolice = new Police('Alberto', 14);

console.log(myPerson, myPolice);

console.log(myPerson instanceof Person);
console.log(myPolice instanceof Police);
console.log(myPolice instanceof Person);
console.log(myPolice.__proto__.constructor.name);

class Rectangle {
  data = { width: 0, height: 0 };
  #secretillo;
  constructor(width, height, secret) {
    this.data.width = width;
    this.data.height = height;
    this.#secretillo = secret;
  }

  set height(valor) {
    this.data.height = valor;
  }
  set width(valor) {
    this.data.width = valor;
  }

  get secret() {
    return this.#secretillo;
  }

  get area() {
    return this.data.width * this.data.height;
  }
}

const myRectangle = new Rectangle(4, 5, 'SHHHHHHHHHH');

myRectangle.width = 9;

console.log(myRectangle, myRectangle);

const myArray = [9, 8, 7, 6];
myArray.push(17);
console.log(myArray.length);

console.log(myRectangle.secret);
myRectangle.secret = 'HOLI';
