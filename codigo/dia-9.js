'use strict';

const products = [
  { name: 'abrigo', price: 100, inStock: true },
  { name: 'pantalon', price: 30, inStock: true },
  { name: 'calcetines', price: 7, inStock: true },
  { name: 'camisa', price: 18, inStock: true },
];

const someAbrigo = products.some((product) => {
  console.log('ABRIGO', product.name);
  return product.name === 'abrigo';
});
const someBrero = products.some((product) => {
  return product.name === 'sombrero';
});
const someCamisa = products.some((product) => {
  console.log('CAMISA', product.name);
  return product.name === 'camisa';
});

const allProductsInStock = products.every((product) => {
  console.log('VUELTA');
  return product.inStock;
});

console.log(someAbrigo, someBrero);
console.log(allProductsInStock);

const losCalcetines = products.find((product) => {
  return product.name === 'calcetinesaasdadasasda';
});
const losCalcetinesIndex = products.findIndex((product) => {
  return product.name === 'calcetiasdasdasnes';
});

console.log(losCalcetines, products, losCalcetinesIndex);

const numerillos = [12, 3, 2, 1, 5, 52];
numerillos.sort((a, b) => {
  return a - b;
});
console.log(numerillos);

products.sort((productA, productB) => {
  console.log(productA.name, productB.name);
  return productB.price - productA.price;
});

console.log(products);

function fibonacci(position) {
  if (position <= 1) {
    return position;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}

const cache = { 0: 0, 1: 1 };

function fibonacciMemo(position) {
  if (cache[position] || position === 0) {
    return cache[position];
  }
  const coputedValue = fibonacciMemo(position - 1) + fibonacciMemo(position - 2);
  cache[position] = coputedValue;
  return coputedValue;
}

console.time('optimizado');
console.log(fibonacciMemo(45));
console.timeEnd('optimizado');
console.time('fibonacci');
console.log(fibonacci(45));
console.timeEnd('fibonacci');

function isSorted(items) {
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i] > items[i + 1]) {
      return false;
    }
  }
  return true;
}

function getRandomNumber(max) {
  return Math.round(Math.random() * max);
}

function mix(items) {
  const temp = [...items];
  const result = [];

  while (temp.length > 0) {
    result.push(temp.splice(getRandomNumber(temp.length - 1), 1)[0]);
  }

  return result;
}

function wtfSort(items) {
  let temp = [...items];

  while (isSorted(temp) === false) {
    temp = mix(items);
  }

  return temp;
}

const desordenado = [6, 7, 2, 8, 1, 9, 5, 10, 4, 15, 20, 80];

console.time('QueEstoyHaciendoConMiVida');
console.log(wtfSort(desordenado));

console.timeEnd('QueEstoyHaciendoConMiVida');
