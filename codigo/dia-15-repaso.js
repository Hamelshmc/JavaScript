'use strict';

const numeros = [9, 8, 7, 6, 5, 4];
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

function esPar(numero, index, arrayOriginal) {
  return numero % 2 === 0;
}

const todosSonPares = numerosPares.every(esPar);

const algunoEsPar = numerosImpares.some(esPar);

const unNumeroPar = numeros.find(esPar);

const IndiceDeUnNumeroPar = numeros.findIndex(esPar);

const todosLosPares = numeros.filter(esPar);

console.log('Todos pares', todosSonPares);
console.log('Alguno par', algunoEsPar);
console.log('Un numero par', unNumeroPar);
console.log('Indice de un numero par', IndiceDeUnNumeroPar);
console.log('Todos los numeros pares', todosLosPares);

const ElDoble = numeros.map((numero) => {
  return numero * 2;
});
console.log('El doble', ElDoble);

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

const items = itemPrices.map((name, index) => {
  const tempItem = { name: itemNames[index], price: itemPrices[index] };
  return tempItem;
});

console.log('ITEMS', items);

const totalPrice = itemPrices.reduce((acumulador, currentValue, index, arrayOriginal) => {
  return acumulador + currentValue;
});

console.log('Precio total', totalPrice);

const itemObjects = [
  {
    name: 'Camisa',
    price: 13,
  },
  {
    name: 'Pantalon',
    price: 27,
  },
  {
    name: 'Calcetines',
    price: 100,
  },
];

const totalPriceObjects = itemObjects.reduce((acumulador, currentValue, index, arrayOriginal) => {
  return acumulador  + currentValue.name;
}, '');
console.log('totalPriceObjects', totalPriceObjects);
