"use strict";

// SetTimeout
const timeoutId = setTimeout(() => {
  console.log("Esto tarda");
}, 2000);

clearTimeout(timeoutId);

console.log("Esto no tarda");

setInterval;

const loQueQuieroRepetir = () => {
  console.log("Esto se repite");
};

loQueQuieroRepetir();
const intervalId = setInterval(loQueQuieroRepetir, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 4000);

const myPromise = new Promise((resolve, reject) => {});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Esto se ejecuta siempre y al final");
  });

const persons = [
  {
    name: "Pedro",
    age: 35,
    country: "ES",
    infected: true,
    pet: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    country: "UK",
    infected: true,
    pet: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    country: "ES",
    infected: false,
    pet: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    country: "DE",
    infected: false,
    pet: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    country: "UK",
    infected: true,
    pet: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    country: "US",
    infected: false,
    pet: "Pence",
  },
];

const pets = [
  {
    name: "Troski",
    animal: "perro",
  },
  {
    name: "Firulais",
    animal: "perro",
  },
  {
    name: "Berritxu",
    animal: "loro",
  },
  {
    name: "Noodle",
    animal: "araña",
  },
  {
    name: "Leon",
    animal: "gato",
  },
  {
    name: "Pence",
    animal: "perro",
  },
];

const animals = [
  {
    name: "perro",
    legs: 4,
  },
  {
    name: "araña",
    legs: 8,
  },
  {
    name: "gato",
    legs: 4,
  },
  {
    name: "loro",
    legs: 2,
  },
  {
    name: "gallina",
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];
const mostInfectedCountry = countries.reduce((mostInfected, country) => {
  return mostInfected.infected > country.infected ? mostInfected : country;
}, countries[0]);

console.log("MAS INFECTADO", mostInfectedCountry);

const personsWithAnimal = persons.map((person) => {
  const personCopy = { ...person };
  const animal = pets.find((animal) => {
    return personCopy.pet === animal.name;
  });
  console.log(animal);
  personCopy.petData = animal;
  return personCopy;
});

const personsWithAnimalData = personsWithAnimal.map((person) => {
  const personCopy = { ...person };
  const animal = animals.find((animal) => {
    return person.petData.animal === animal.name;
  });
  personCopy.petData.animalData = animal;
  return personCopy;
});

const totalLegs = persons
  .map((person) => {
    const personCopy = { ...person };

    const animal = pets.find((animal) => {
      return personCopy.pet === animal.name;
    });
    personCopy.petData = animal;

    const animalData = animals.find((animal) => {
      return personCopy.petData.animal === animal.name;
    });
    personCopy.petData.animalData = animalData;

    return personCopy;
  })
  .reduce((accumulator, person) => {
    return accumulator + person.petData.animalData.legs;
  }, 0);

console.log(totalLegs);
