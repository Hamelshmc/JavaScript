'use strict';

const saluda = (name) => {
  console.log(`Hola ${name}`);
};

function ejecutaLaFuncion(callback) {
  callback();
}

ejecutaLaFuncion(saluda);

Array.prototype.prueba = function () {
  console.log(this);
};

Array.prototype.nuestroForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.nuestroMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
const numericos = [9, 8, 7, 6, 5];
function sacarNumeros(numerico, index) {
  console.log(index, numerico);
}
numericos.forEach(sacarNumeros);
numericos.nuestroForEach(sacarNumeros);
numericos.prueba();

const doble = numericos.map((numerico) => {
  return numerico * 2;
});
const doble2 = numericos.map((numerico) => numerico * 2);
console.log(doble, doble2);

const users = [
  { name: 'Ana', age: 10 },
  { name: 'Lucia', age: 28 },
  { name: 'Rocio Piso', age: 13 },
];

const edades = users.map((user) => user.age);
const edades2 = users.nuestroMap((user) => user.age);

function edadesLiandome(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].age);
  }
  return result;
}

console.log(edades, edades2);
console.log(edadesLiandome(users));

const userCopy = [...users];
const usersCopyConMap = users.map((user) => {
  return { ...user };
});

usersCopyConMap[0].age = 999999;

console.log(users, userCopy, usersCopyConMap);

const adults = users.filter((user) => {
  return user.age >= 18;
});

console.log(adults);

const losPares = numericos.filter((value, index) => {
  return index % 2 !== 0;
});

console.log(losPares);
const sumaEdades = users.reduce((accumulator, user) => {
  return accumulator + user.age;
}, 0);

const users2 = [
  { name: 'Ana', age: 10 },
  { name: 'Lucia', age: 20 },
  { name: 'Rocio Piso', age: 30 },
  { name: 'Ivan', age: 11 },
  { name: 'Jose', age: 29 },
];
// Aqui guardo el resultado de cada funcion en una variable intermedia

console.log('INICIAL', users2);

const adultUsers = users2.filter((user) => {
  return user.age >= 18;
});
console.log('ADULTOS', adultUsers);

const userAges = adultUsers.map((user) => {
  return user.age;
});
console.log('EDADES', userAges);

const sumaEdades = userAges.reduce((accumulator, age) => {
  return accumulator + age;
}, 0);
console.log('SUMA EDADES', sumaEdades);

const users2 = [
  { name: 'Ana', age: 10 },
  { name: 'Lucia', age: 20 },
  { name: 'Rocio Piso', age: 30 },
  { name: 'Ivan', age: 11 },
  { name: 'Jose', age: 29 },
];

// Aqui hago lo mismo de antes pero encadeno las funciones

const sumaEdades = users2
  .filter((user) => {
    return user.age >= 18;
  })
  .map((user) => {
    return user.age;
  })
  .reduce((accumulator, age) => {
    return accumulator + age;
  }, 0);

console.log(sumaEdades);
