'use strict';

const user = { name: 'Ivan' };

if (user.address.zip === 15004) {
  console.log('15004');
}

console.log(user);

const user = {
  name: 'Ivan',
  address: { street: 'Calle Real', zip: 15004 },
  age: 5,
  isAdult: function () {
    console.log(this.address.zip);
    this.saludo();
    return this.age >= 18;
  },
  saludo: function () {
    console.log('Hola', this.name);
  },
};

console.log(user.isAdult());
const userCopy = { ...user, address: { ...user.address } };

userCopy.address.zip = 15011;
console.log(userCopy.address.zip, user.address.zip);

userCopy.age = 20;

console.log(user.name, user['name']);

console.log('Las keys', Object.keys(user));
console.log('Los values', Object.values(user));

let users = [{ name: 'Juan' }, { name: 'Jose' }, { name: 'Paco' }, { name: 'Ana' }];

const usersCopy = [...users];

users.push({ name: 'Zoe' });

users.unshift({ name: 'Cris' });

const elUsuarioQueQuiteDelFinal = users.pop();
const elUsuarioQueQuiteDelPrincipio = users.shift();

console.log(users, elUsuarioQueQuiteDelFinal, elUsuarioQueQuiteDelPrincipio);

const languages = ['ES', 'GL', 'EN'];

console.log(languages.indexOf('EN'));
console.log(languages.reverse());

let values = ['Ivan', 'Pablo', 'Ana', 'Juan', 'Patricia', 'Firulais'];

let loQueSacoConSlice = values.slice(1, 4);

// CUIDADO, splice modifica el array original
let loQueSaque = values.splice(2, 1);

console.log(values, loQueSaque, loQueSacoConSlice);

console.log(values.sort());

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
