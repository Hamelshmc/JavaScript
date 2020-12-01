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

// function past(horas, minutos, segundos) {
//   let resultado = 0;
//   if (horas > 0 || minutos > 0 || segundos > 0) {
//     resultado = horas * 3600000 + minutos * 60000 + segundos * 1000;
//   }
//   return resultado;
// }
// console.log(past(0, 1, 1))

// users

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual que el anterior,
  la diferencia es que el que estaba inicialmente infectado al dia siguiente esta sano
  */

// const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];

// const infected2 = [false, true, false, true, false, true, false, false];

// function comprobarSiHayElemento(arr, index, contagiado) {
//   if (arr[index] !== undefined) {
//     arr[index] = contagiado;
//   }
// }

// function consultaMedica(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = true;
//       comprobarSiHayElemento(resultado, index - 1, true);
//       comprobarSiHayElemento(resultado, index + 1, true);
//     }
//   }
//   return resultado;
// }

// function consultaMedica2(arr) {
//   let resultado = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index]) {
//       resultado[index] = false;
//     } else if (arr[index] === arr[index + 1] && arr[index] === arr[index - 1]) {
//       resultado[index] = false;
//     } else {
//       resultado[index] = true;
//     }
//   }
//   return resultado;
// }
// console.log(patients);
// console.log(consultaMedica(patients));
// console.log(consultaMedica2(patients));

// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacci2(n) {
//   let resultado;
//   for (let index = 1; index < n; index++) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       resultado = index + 1 - index + 2;
//     }
//   }
//   return resultado;
// }

// console.log(fibonacci(8));
// console.log(fibonacci2(8));

// function matrix(num) {
//   let resultado = [];
//   for (let a = 0; a < num; a++) {
//     resultado.push([]);
//     for (let b = 0; b < num; b++) {
//       resultado[a][b] = '*';
//     }
//   }
//   pintarDiagonales(resultado, 'H');
//   return resultado;
// }

// function pintarDiagonales(arr, simbolo) {
//   let menos = arr.length - 1;
//   for (let index = 0; index < arr.length; index++) {
//     arr[index][index] = simbolo;
//     arr[index][menos--] = simbolo;
//   }
//   return arr;
// }

// function matrixPersonalizada(num, simboloRelleno, simboloDiagonal) {
//   let resultado = [];
//   for (let fila = 0; fila < num; fila++) {
//     resultado.push([]);
//     for (let columna = 0; columna < num; columna++) {
//       resultado[fila][columna] = simboloRelleno;
//       resultado[fila][fila] = simboloDiagonal;
//       resultado[fila][num - (fila + 1)] = simboloDiagonal;
//     }
//   }
//   return resultado;
// }

// console.log(matrix(4));

// console.log(matrixPersonalizada(5, '💻', '🧯'));

// console.log(ordenarBurbuja(desordenado));
// console.log(ordenarSeleccion(desordenado));

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

const itemNames = ['Camisa', 'Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 13, 27, 100];

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
    const items = itemNames.map((name, index) => {
      return new Item(name, itemPrices[index]);
    });
    // .reduce((accumulador, item) => {
    //   const product = accumulador.find((data) => {
    //     return item.name === data.name;
    //   });
    //   if (product) {
    //     product.amount++;
    //     product.price += product.price;
    //   } else {
    //     accumulador.push({
    //       name: item.name,
    //       unitPrice: item.price,
    //       price: item.price,
    //       amount: 1,
    //     });
    //   }
    //   return accumulador;
    // }, []);
    return items;
  }
}

class ItemCarrito {
  item;
  amount;
  totalPrice;

  constructor(item) {
    this.item = item;
  }

  seRepite(item) {
    let foundItem = item.find((data) => {
      return this.item.name === data.name;
    });
    if (foundItem) {
      this.amount++
      this.totalPrice += this.item.price
    } 

  }
}

class Tienda {
  static comprar(carrito) {
    console.log(carrito);
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

const myTienda = Tienda.comprar(myUsuario.pay());
