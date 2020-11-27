'use strict';
// // Esto es un comentario de una linea
// /** Comentario en bloque  */

// let cuandoEmpezoCovid19 = 2020;

// console.log(cuandoEmpezoCovid19);

// console.log('Hello World');
// console.warn('Warning');
// console.error('Error');

// typeOf para consultar el tipo de variable
// operador ternario
// let frase = edad <= 18 ? 'Es mayor de edad' : 'Es menor de edad';
// function hola(mensaje) {
//    return mensaje;
//  }

// function past(horas, minutos, segundos) {
//   let resultado = 0;
//   if (horas > 0 || minutos > 0 || segundos > 0) {
//     resultado = horas * 3600000 + minutos * 60000 + segundos * 1000;
//   }
//   return resultado;
// }
// console.log(past(0, 1, 1))

// users

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual que el anterior,
  la diferencia es que el que estaba inicialmente infectado al dia siguiente esta sano
  */

// const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];

// const infected2 = [false, true, false, true, false, true, false, false];

// function comprobarSiHayElemento(arr, index, contagiado) {
//   if (arr[index] !== undefined) {
//     arr[index] = contagiado;
//   }
// }

// function consultaMedica(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = true;
//       comprobarSiHayElemento(resultado, index - 1, true);
//       comprobarSiHayElemento(resultado, index + 1, true);
//     }
//   }
//   return resultado;
// }

// function consultaMedica2(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = false;
//     } else if (arr[index] === arr[index + 1] && arr[index] === arr[index - 1]) {
//       resultado[index] = false;
//     } else {
//       resultado[index] = true;
//     }
//   }
//   return resultado;
// }
// console.log(patients);
// console.log(consultaMedica(patients));
// console.log(consultaMedica2(patients));

// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacci2(n) {
//   let resultado;
//   for (let index = 1; index < n; index++) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       resultado = index + 1 - index + 2;
//     }
//   }
//   return resultado;
// }

// console.log(fibonacci(8));
// console.log(fibonacci2(8));

// function matrix(num) {
//   let resultado = [];
//   for (let a = 0; a < num; a++) {
//     resultado.push([]);
//     for (let b = 0; b < num; b++) {
//       resultado[a][b] = '*';
//     }
//   }
//   pintarDiagonales(resultado, 'H');
//   return resultado;
// }

// function pintarDiagonales(arr, simbolo) {
//   let menos = arr.length - 1;
//   for (let index = 0; index < arr.length; index++) {
//     arr[index][index] = simbolo;
//     arr[index][menos--] = simbolo;
//   }
//   return arr;
// }

// function matrixPersonalizada(num, simboloRelleno, simboloDiagonal) {
//   let resultado = [];
//   for (let fila = 0; fila < num; fila++) {
//     resultado.push([]);
//     for (let columna = 0; columna < num; columna++) {
//       resultado[fila][columna] = simboloRelleno;
//       resultado[fila][fila] = simboloDiagonal;
//       resultado[fila][num - (fila + 1)] = simboloDiagonal;
//     }
//   }
//   return resultado;
// }

// console.log(matrix(4));

// console.log(matrixPersonalizada(5, '💻', '🧯'));

// console.log(ordenarBurbuja(desordenado));
// console.log(ordenarSeleccion(desordenado));

const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski',
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais',
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu',
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle',
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon',
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence',
  },
];

const pets = [
  {
    name: 'Troski',
    animal: 'perro',
  },
  {
    name: 'Firulais',
    animal: 'perro',
  },
  {
    name: 'Berritxu',
    animal: 'loro',
  },
  {
    name: 'Noodle',
    animal: 'araña',
  },
  {
    name: 'Leon',
    animal: 'gato',
  },
  {
    name: 'Pence',
    animal: 'perro',
  },
];

const animals = [
  {
    name: 'perro',
    legs: 4,
  },
  {
    name: 'araña',
    legs: 8,
  },
  {
    name: 'gato',
    legs: 4,
  },
  {
    name: 'loro',
    legs: 2,
  },
  {
    name: 'gallina',
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: 'CN',
    name: 'China',
    population: 1439,
    infected: 81999,
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    population: 331,
    infected: 112468,
  },
  {
    code: 'DE',
    name: 'Alemania',
    population: 83,
    infected: 56202,
  },
  {
    code: 'ES',
    name: 'España',
    population: 46,
    infected: 72248,
  },
  {
    code: 'UK',
    name: 'Reino Unido',
    population: 67,
    infected: 17301,
  },
];

// A partir de las personas sacar el animal que tienen más personas como mascota
const personsWithAnimal = persons.map((person) => {
  let personCopy = { ...person };
  const pet = pets.find((pet) => pet.name === personCopy.pet);
  personCopy.petData = pet;
  const animal = animals.find((animal) => personCopy.petData.animal === animal.name);
  personCopy.petData.animalData = animal;
  return personCopy;
});

const totalLegs = personsWithAnimal.reduce((acumulador, persona) => {
  return acumulador + persona.petData.animalData.legs;
}, 0);

console.log(personsWithAnimal);
console.log(totalLegs);
/**
 * EJERCICIOS
 */

// Número total de infectados

console.log(
  'Número total de infectados',
  persons.reduce((acumulador, person) => {
    return acumulador + person.infected;
  }, 0)
);

// Número total de sanos
console.log(
  ' Número total de sanos',
  persons.reduce((acumulador, person) => {
    return acumulador + !person.infected;
  }, 0)
);

// Numero total de infectados en los países (del array de países)

console.log(
  'Numero total de infectados en los países (del array de países)',
  countries.reduce((acumulador, country) => {
    return acumulador + country.infected;
  }, 0)
);

// País con más infectados (del array de países)

console.log(
  'País con más infectados (del array de países)',
  countries.filter(
    (country) => country.infected === Math.max(...countries.map((country) => country.infected))
  )
);

// Número de total de infectados del array de personas
console.log(
  'Número de total de infectados del array de personas',
  persons.reduce((acumulador, person) => {
    return acumulador + person.infected;
  }, 0)
);

// Array con nombre de todas las mascotas

console.log(
  'Array con nombre de todas las mascotas',
  pets.map((pet) => pet.name)
);

// Array con las personas infectadas del array de personas
console.log(
  ' Array con las personas infectadas del array de personas',
  persons.filter((person) => person.infected)
);

// Array de españoles con perro
console.log(
  'Array de españoles con perro',
  persons
    .map((person) => {
      let personCopy = { ...person };
      const pet = pets.find((pet) => pet.name === personCopy.pet);
      personCopy.petData = pet;
      return personCopy;
    })
    .filter((person) => person.country === 'ES' && person.petData.animal === 'perro')
);

// Número de personas infectadas del array de personas
console.log(
  'Número de personas infectadas del array de personas',
  persons.reduce((acumulador, person) => {
    return person.infected ? acumulador + 1 : acumulador;
  }, 0)
);

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
console.log(
  'Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota',
  persons.map((person) => {
    let personCopy = { ...person };
    const pet = pets.find((pet) => pet.name === personCopy.pet);
    personCopy.petData = pet;
    const animal = animals.find((animal) => personCopy.petData.animal === animal.name);
    personCopy.petData.animalData = animal;
    return personCopy;
  })
);

// A partir de las personas sacar el animal que tienen más personas como mascota
console.log(
  'A partir de las personas sacar el animal que tienen más personas como mascota',
  persons
    .map((person) => {
      let personCopy = { ...person };
      const pet = pets.find((pet) => pet.name === personCopy.pet);
      personCopy.petData = pet;
      return personCopy;
    })
    .map((value) => value.petData.animal)
);

// Número total de patas de las mascotas de las personas
console.log(
  'Número total de patas de las mascotas de las personas',
  persons
    .map((person) => {
      let personCopy = { ...person };
      const pet = pets.find((pet) => pet.name === personCopy.pet);
      personCopy.petData = pet;
      const animal = animals.find((animal) => personCopy.petData.animal === animal.name);
      personCopy.petData.animalData = animal;
      return personCopy;
    })
    .reduce((acumulador, persona) => {
      return acumulador + persona.petData.animalData.legs;
    }, 0)
);
// Array con las personas que tienen animales de 4 patas
console.log(
  'Array con las personas que tienen animales de 4 patas',
  persons
    .map((person) => {
      let personCopy = { ...person };
      const pet = pets.find((pet) => pet.name === personCopy.pet);
      personCopy.petData = pet;
      const animal = animals.find((animal) => personCopy.petData.animal === animal.name);
      personCopy.petData.animalData = animal;
      return personCopy;
    })
    .filter((persona) => persona.petData.animalData.legs === 4)
);
// A partir del string 'España' obtener un array de personas no infectadas de ese país

// Array de paises que tienen personas con loros como mascota
console.log(
  'Array de paises que tienen personas con loros como mascota',
  countries
    .map((country) => {
      let countryCopy = { ...country };
      const person = persons.find((person) => countryCopy.code === person.country);
      countryCopy.personData = person;
      if (countryCopy.personData !== undefined) {
      const pet = pets.find((pet) => pet.name === countryCopy.personData.pet);
      countryCopy.personData.petData = pet;
      }
      return countryCopy;
    }).filter(country => {
      if (country.personData !== undefined)
      { return country.personData.petData.animal === 'loro' }
    })
);
// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
