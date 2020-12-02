'use strict';

function saludo() {
  console.log('HOLA!');
}
function otroSaludo() {
  console.log('Hey!');
}

function admiteCallbacks(callback) {
  callback();
}

admiteCallbacks(saludo);
admiteCallbacks(otroSaludo);

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calculadora(a, b, callback) {
  console.log(callback(a, b));
}

calculadora(3, 5, sumar);
calculadora(9, 5, multiplicar);
calculadora(25, 5, dividir);
calculadora(15, 6, (a, b) => a % b);

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

// Esto se salta un poco el enunciado

const mostLovedAnimal = animals
  .map((animal) => {
    const animalCopy = { ...animal };

    animalCopy.ammount = pets.filter((pet) => {
      return pet.animal === animal.name;
    }).length;

    return animalCopy;
  })
  .reduce((mostLoved, animal) => {
    return mostLoved.ammount > animal.ammount ? mostLoved : animal;
  });

console.log(mostLovedAnimal);

// Me complico mazo pero cumplo el enunciado

const personsWithAnimal = persons
  .map((person) => {
    const personCopy = { ...person };

    const foundPet = pets.find((pet) => {
      return pet.name === personCopy.pet;
    });

    if (foundPet) {
      personCopy.animalPet = foundPet.animal;
    }

    return personCopy;
  })
  .reduce((stats, person) => {
    const foundAnimal = stats.find((stat) => {
      return stat.animal === person.animalPet;
    });

    if (foundAnimal) {
      foundAnimal.ammount++;
    } else {
      stats.push({ animal: person.animalPet, ammount: 1 });
    }

    return stats;
  }, [])
  .reduce((mostLoved, stat) => {
    return mostLoved.ammount > stat.ammount ? mostLoved : stat;
  });

console.log(personsWithAnimal);

const infectados = persons.filter((person) => person.infected);
const totalInfectados = infectados.reduce((accumulator, person) => {
  return accumulator + 1;
}, 0);

const infectados2 = persons.reduce((accumulator, person) => {
  return person.infected ? accumulator + 1 : accumulator;
}, 0);

console.log(infectados.length, totalInfectados, infectados2);

const personsWithAnimal = persons.map((person) => {
  const personCopy = { ...person };

  const foundPet = pets.find((pet) => {
    return pet.name === personCopy.pet;
  });

  if (foundPet) {
    personCopy.animalPet = foundPet.animal;
  }

  return personCopy;
});

console.log(personsWithAnimal);

const allHealthy = persons.every((person) => {
  return person.infected === false;
});
const someHealthy = persons.some((person) => {
  return person.infected === false;
});

console.log(allHealthy, someHealthy);

const callback = () => {
  console.log('Esto tarda');
  // Esto simula un setInterval
  setTimeout(callback, 2000);
};

const timeoutId = setTimeout(callback, 2000);

const intervalId = setInterval(() => {
  console.log('Esto es un intervalo');
}, 2000);

(function (a, b) {
  console.log(a + b);
})(4, 5);

let today = new Date();

let birthday = new Date('February 14, 1988 04:27:16');
let birthday2 = new Date('1995-4-8,04:27:10');

console.log(today);
console.log(birthday);
console.log(birthday2);

const test = {};

let age = 227;

try {
  if (age > 130) {
    throw 'Anda que no eres viejo amigo';
  }
} catch (error) {
  age = 130;
}

console.log('ALGO', age);

const userData = ['Ivan', 'Palleiro', 'Perez'];

const name = userData[0];
const lastName = userData[1];

const [firstName, , lastName2] = userData;

console.log(firstName, lastName2);

const users = ['Ana', 'Lucia', 'Rocio', 'Juan', 'Antonio'];

const [unUser, ...restoDeUsuarios] = users;

console.log(unUser, restoDeUsuarios, users);

const userData2 = ['Ivan', 'Palleiro', 'Perez'];

const [firstName = 'Sin nombre', middleName = 'Sin primer apellido', lastName = 'Sin segundo apellido'] = userData2;

console.log(firstName, middleName, lastName);

const user = { name: 'Ivan', city: 'La Coru', pet: 'perro' };

const { city, ...restoDelObjeto } = user;

console.log(city, restoDelObjeto, user);

function printUserData({ name, pet, ...rest }, age = 0) {
  console.log(name, pet, age);
}

printUserData(user, 28);
