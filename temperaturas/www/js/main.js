'use strict';
// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

const temperaturas = [
  {
    city: 'A Coruña',
    min: 17,
    max: 23,
  },
  {
    city: 'Ferrol',
    min: 15,
    max: 32,
  },
  {
    city: 'Lugo',
    min: -20,
    max: 31,
  },
  {
    city: 'Ourense',
    min: 18,
    max: 35,
  },
  {
    city: 'Pontevedra',
    min: 18,
    max: 29,
  },
];

const tableTemperaturas = document.getElementById('temperaturas');
const fila = document.createElement('tr');
const columna = document.createElement('td');
const columna2 = document.createElement('td');
const columna3 = document.createElement('td');
columna2.classList.add('low');
columna3.classList.add('medium');

tableTemperaturas.appendChild(fila);
columna.textContent = `${temperaturas[0].city}`;
columna2.textContent = `${temperaturas[0].min}`;
columna3.textContent = `${temperaturas[0].max}`;
fila.appendChild(columna);
fila.appendChild(columna2);
fila.appendChild(columna3);




