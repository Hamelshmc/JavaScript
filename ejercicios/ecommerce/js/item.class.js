'use strict';

export default class Item {
  name;
  price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static buildItems(names, prices) {
    return names.map((name, index) => {
      return new Item(name, prices[index]);
    });
  }
}
