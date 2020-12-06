'use strict';

export default class Shop {
  static printTicket(cart) {
    for (const item of cart) {
      console.log(`${item.name}  ${item.price}€  ${item.ammount}  ${item.ammount * item.price}€`);
    }
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.ammount;
    }, 0);

    console.log(`TOTAL ${total}€`);
  }
}
