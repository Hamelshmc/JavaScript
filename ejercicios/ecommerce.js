'use strict';
/*
  Vamos a crear un ecommerce

  Por un lado tenemos los usuarios, que van a estar representados por una clase
  Solo voy a necesitar una instancia de un usuario.
  El usuario tiene un carrito que es privado, el carrito es un array.
  En el array el usuario va metiendo items
  El usuario va a tener un metodo de añadir al carrito, porque no puedo modificarlo desde fuera,
  añadir al carrito recibe un item como parametro.
  Tambien tiene un metodo pagar que devuelve el carrito para poder pasarlo a la tienda y que emita la
  factura

  Voy a tener una clase Item. Los items los voy a generar a partir de los datos de abajo.

  Voy a tener una tienda representada con su clase.
  Va a tener un metodo comprar, que recibe el carrito de usuario
  El metodo de comprar saca por la consola la factura
  cada linea de la factura tiene el nombre del articulo, las unidades, el precio por unidad y el
  precio de las unidades de esa linea.
  La ultima linea saca el total de todo el carrito
*/
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class Usuario {
  #cart = [];

  addCart(item) {
    this.#cart.push(item);
  }

  pay() {
    return this.#cart;
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static article(itemNames, itemPrices) {
    let items = itemNames.map((name, index) => {
      return new Item(name, itemPrices[index]);
    });
    return items;
  }
}

let resultado = [];
resultado.push();

class Tienda {
  static comprar(carrito) {
    let resultado = carrito.reduce((accumulator, item) => {
      const product = accumulator.find((data) => {
        return item.name === data.name;
      });
      if (product) {
        product.amount++;
        product.price += product.price;
      } else {
        accumulator.push({
          name: item.name,
          unitPrice: item.price,
          price: item.price,
          amount: 1,
        });
      }
      return accumulator;
    }, []);

    let total = resultado.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    for (const item of resultado) {
      console.log(
        `
        nombre del articulo    ${item.name}
        unidades               ${item.amount}
        precio por unidad      ${item.unitPrice}€
        precio de las unidades ${item.price}€
       `
      );
    }
    console.log(
      `
        Total                  ${total}€
       `
    );
  }
}


const myItems = Item.article(itemNames, itemPrices);
const myUsuario = new Usuario();

myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[1]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[2]);
myUsuario.addCart(myItems[2]);
myUsuario.addCart(myItems[1]);
myUsuario.addCart(myItems[1]);

const myTienda = Tienda.comprar(myUsuario.pay());
