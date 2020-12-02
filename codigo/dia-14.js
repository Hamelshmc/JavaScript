'use strict';

const user = {
  age: 89,
  sayAge: () => {
    setTimeout(() => {
      console.log(this.age);
    }, 1000);
  },
};

user.sayAge();

class User {
  name;
  #creditCard;

  constructor(name, creditCard) {
    this.name = name;
    this.#creditCard = creditCard;
  }

  darTarjeta() {
    return this.#creditCard;
  }

  cambiarTarjeta(numeroDeTarjeta) {
    this.#creditCard = numeroDeTarjeta;
  }

  static hacerUsuarios(names, cards) {
    const users = names.map((name, index) => {
      return new User(name, cards[index]);
    });
    return users;
  }
}

const names = ['Ivan', 'Lucia', 'Ana'];
const cards = ['1', '2', '3'];

const myUsers = User.hacerUsuarios(names, cards);
console.log(myUsers);

const myUser = new User('Ivan', '111111111111');
