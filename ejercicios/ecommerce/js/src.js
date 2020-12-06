'use strict';

import User from './user.class.js';
import getRandomItem from './helpers.js';
import Item from '/js/item.class.js';

function addRandomItemsToCart(user, ammount) {
  for (let i = 0; i < ammount; i++) {
    user.addToCart(getRandomItem(catalog));
  }
}

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

const catalog = Item.buildItems(itemNames, itemPrices);
const user = new User();
addRandomItemsToCart(user, 20);
user.pay();
