'use strict';

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

/**
 * EJERCICIOS
 */

// Número total de infectados

// Número total de sanos

// Numero total de infectados en los países (del array de países)

// País con más infectados (del array de países)

// Número de total de infectados del array de personas

// Array con nombre de todas las mascotas

// Array con las personas infectadas del array de personas

// Array de españoles con perro

// Número de personas infectadas del array de personas

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota

// A partir de las personas sacar el animal que tienen más personas como mascota

// Número total de patas de las mascotas de las personas

// Array con las personas que tienen animales de 4 patas

// A partir del string 'España' obtener un array de personas no infectadas de ese país

// Array de paises que tienen personas con loros como mascota

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas

// Hamilton

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
    .reduce((accumulador, person) => {
      const foundAnimal = accumulador.find((stat) => {
        return person.petData.animal === stat.animal;
      });
      if (foundAnimal) {
        foundAnimal.amount++;
      } else {
        accumulador.push({ animal: person.petData.animal, amount: 1 });
      }
      return accumulador;
    }, [])
    .reduce((masRepetido, animalStats) => {
      return masRepetido.amount > animalStats.amount ? masRepetido : animalStats;
    })
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
  persons
    .map((person) => {
      let personCopy = { ...person };
      const pet = pets.find((pet) => pet.name === personCopy.pet);
      personCopy.petData = pet;
      return personCopy;
    })
    .filter((person) => person.petData.animal === 'loro')
    .map((person) => {
      return countries.find((country) => country.code === person.country);
    })
);

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
