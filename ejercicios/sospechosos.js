'use strict';
/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método

  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio. Podeis implementar
  una clase persona de la que heredan el detective y los sospechosos.
*/

// Con estos datos vais a tener que montar las instancias
// Con estos datos vais a tener que montar las instancias
const names = ['Willy', 'Ivan', 'Ramiro', 'Anuel'];
const eyeColor = ['azul', 'marron', 'azul', 'marron'];
const height = ['bajo', 'alto', 'alto', 'alto'];
const tattooed = [true, false, false, false];
const tip = [
  {
    height: 'alto',
  },
  {
    eyeColor: 'marron',
  },
  {
    tattooed: false,
  },
];

class Person {
  name;
  eyeColor;
  height;
  tattooed;
  constructor(name, eyeColor, height, tattooed) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
  }
}

class Suspects extends Person {
  #tip;
  constructor(name, eyeColor, height, tattooed, tip) {
    super(name, eyeColor, height, tattooed);
    this.#tip = tip;
  }

  confiesa() {
    return this.#tip;
  }

  static createSuspects(names, eyeColor, height, tattooed, tip) {
    let newsSuspects = names.map((name, index) => {
      return new Suspects(name, eyeColor[index], height[index], tattooed[index], tip[index]);
    });
    return newsSuspects;
  }
}

class Detective extends Person {
  city;
  constructor(name, eyeColor, height, tattooed, city) {
    super(name, eyeColor, height, tattooed);
    this.city = city;
  }

  investigar(suspects) {
    let cluesKeys = this.getTipValue(suspects);

    let result = suspects
      .filter((suspect) => {
        for (const key in cluesKeys) {
          if (!suspect.hasOwnProperty([key]) || suspect[key] !== cluesKeys[key]) {
            return false;
          }
        }
        return true;
      })
      .map((suspect) => suspect.name)
      .join(' && ');

    return `Detective ${this.name.toUpperCase()} - SOSPECHOSO ES --> ${result.toUpperCase()}`;
  }

  getTipValue(suspects) {
    const result = suspects.reduce(
      (acumulador, item) => ({
        ...acumulador,
        ...item.confiesa(),
      }),
      {}
    );

    return result;
  }
}

/* ------------------------------------------------- */
class DetectiveCIA extends Detective {
  constructor(name, eyeColor, height, tattooed, city) {
    super(name, eyeColor, height, tattooed, city);
  }

  investigar(suspects) {
    const clues = Object.values(this.getTipValue(suspects));
    const suspectsContainer = this.getSuspectsArray(suspects);

    const foundSuspect = suspectsContainer
      .filter((suspect) => {
        return clues.every((searchClues) => suspect.includes(searchClues));
      })
      .flat()
      .filter((item) => this.indexed(suspects)[item])
      .join(' && ');

    return `Detective ${this.name.toUpperCase()}    - SOSPECHOSO ES --> ${foundSuspect.toUpperCase()}`;
  }

  getSuspectsArray(suspects) {
    const result = suspects.reduce((accumulator, suspect) => {
      accumulator.push(Object.values(suspect));
      return accumulator;
    }, []);

    return result;
  }

  indexed(suspects) {
    const result = suspects.reduce(
      (acc, el) => ({
        ...acc,
        [el.name]: el,
      }),
      {}
    );
    return result;
  }
}
const mySuspects = Suspects.createSuspects(names, eyeColor, height, tattooed, tip);
const FBI = new Detective('Hamilton', 'negro', 'alto', false, 'A Coruña');
const CIA = new DetectiveCIA('Hamel', 'negro', 'alto', false, 'A Coruña');

console.log(FBI.investigar(mySuspects));
console.log(CIA.investigar(mySuspects));
