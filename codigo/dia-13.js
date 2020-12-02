'use strict';

const url = 'https://www.anapioficeandfire.com/api/houses/378';

fetch(url).then(async (response) => {
  const data = await response.json();
  console.log(data);
});

async function printLordData(url) {
  const houseResponse = await fetch(url);
  const house = await houseResponse.json();

  const lordResponse = await fetch(house.currentLord);
  const lord = await lordResponse.json();

  return lord;
}

function sumar(a, b) {
  return a + b;
}

async function computeThings(url) {
  const lordData = await printLordData(url);
  console.log(lordData);
  const suma = sumar(2, 2);
}

computeThings(url);

class Rectangle {
  width = 0;
  height = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

const myArray = new Array();

const myRectangle = new Rectangle(9, 5);
const myRectangle2 = new Rectangle(10, 10);

const rectangleObject = { width: 5, height: 8 };

const triangleObject = rectangleObject;

console.log(rectangleObject, triangleObject, myRectangle);
console.log(myRectangle instanceof Object);
console.log(myRectangle.width, myRectangle.height);
console.log(myRectangle.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle.getPerimeter());
console.log(myRectangle2.getPerimeter());
