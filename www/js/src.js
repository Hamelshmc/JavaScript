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
const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];
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

class Suspects {
  #tip;
  constructor(name, eyeColor, height, tattooed, tip) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
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

const resultado = {};

class Detective {
  static investigar(suspects) {
    const valuesTip = this.getTipValue(suspects);

    for (const iterator of suspects) {
      console.log(iterator.name);
      for (const key in iterator) {
        if (iterator[key] === valuesTip[key]) {
          console.log('coincide');
        }
      }
    }
  }

  static getTipValue(suspects) {
    const resultado = suspects.reduce(
      (acumulador, item) => ({
        ...acumulador,
        ...item.confiesa(),
      }),
      {}
    );
    return resultado;
  }
}

const containerSuspects = Suspects.createSuspects(names, eyeColor, height, tattooed, tip);
console.log(Detective.investigar(containerSuspects));
