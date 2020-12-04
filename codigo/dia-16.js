'use strict';

const test1 = { a: 1 };
const test2 = { a: 2 };

const merge = { ...test1, ...test2 };
console.log(merge);

const peisano = {
  name: 'Willy',
  eyeColor: 'azul',
  height: 'bajo',
  tattooed: true,
  tip: {
    height: 'alto',
  },
};

for (const key in peisano) {
  console.log(key);
  console.log(peisano[key]);
}

console.log('---------------------');

const keys = Object.keys(peisano);
for (const key of keys) {
  console.log(key);
  console.log(peisano[key]);
}
