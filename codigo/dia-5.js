'use strict';

// // Ejercicio bomba resuelto

// function bomb(numeroIntentos) {
//   const password = Math.round(Math.random() * 10);
//   console.log(password);

//   for (let i = 0; i < numeroIntentos; i++) {
//     const guess = +prompt('Mete un codigo');
//     if (guess === password) {
//       return true;
//     }
//   }

//   return false;
// }

// function playBomb(attempts) {
//   if (bomb(attempts)) {
//     console.log('DESACTIVADA');
//   } else {
//     console.log('BOOOOM');
//   }
// }

// playBomb(5);

// let user = {
//   name: 'Iván',
//   age: 26,
//   pet: 'dog',
//   adult:null,
//   address: {
//     street: 'C/ Real',
//     number: 1,
//   },
// };

// if (user.age >= 18) {
//   user.adult = true;
// } else {
//   user['adult'] = false;
// }

// console.log(user);

// const elCampoAlQueQuieroAcceder = 'age';

// console.log(user.name, user[elCampoAlQueQuieroAcceder]);

// let user = { name: 'Ivan' };

// let userCopy = { ...user, age: 18 };

// console.log(user, userCopy);

// let user = {
//   name: 'Iván',
//   age: 26,
//   pet: 'dog',
//   adult: null,
//   address: {
//     street: 'C/ Real',
//     number: 1,
//   },
// };

// console.log(Object.keys(user), Object.values(user));

// const userCopy = { ...user };

// console.log(userCopy.address === user.address);

// const a = {};
// a.b = a;

// console.log(a);

let myArray = [{ name: 'Ivan' }, { name: 'Ana', address: { street: 'Real' } }];

console.log(myArray[1].name);

// let myArrayCopy = [...myArray]

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// console.log(myArray.length);
