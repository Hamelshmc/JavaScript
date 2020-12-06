'use strict';

import Item from './item.class.js';

export default class CartItem extends Item {
  ammount = 1;
  constructor({ name, price }) {
    super(name, price);
  }

  increaseAmmount() {
    this.ammount++;
  }
}
