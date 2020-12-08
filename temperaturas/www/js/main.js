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

//
// columna3.classList.add('medium');

function buildTemperatureTable(temperatures) {
  const section = document.querySelector('section');
  const tableTemperatures = document.getElementById('temperaturas');
  section.setAttribute('class', 'temp');
  for (let i = 0; i < temperatures.length; i++) {
    const row = document.createElement('tr');
    const column = document.createElement('td');
    const columnTwo = document.createElement('td');
    const columnThree = document.createElement('td');

    tableTemperatures.appendChild(row);
    row.appendChild(column);
    row.appendChild(columnTwo);
    row.appendChild(columnThree);

    column.textContent = `${temperatures[i].city}`;
    columnTwo.textContent = `${temperatures[i].min}`;
    columnThree.textContent = `${temperatures[i].max}`;

    paintColumn(columnTwo, temperatures[i].min);
    paintColumn(columnThree, temperatures[i].max);
  }
}

function paintColumn(columna, temperature) {
  if (temperature < 20) {
    columna.setAttribute('class', 'low');
  } else if (temperature >= 20 && temperature <= 30) {
    columna.setAttribute('class', 'medium');
  } else {
    columna.setAttribute('class', 'high');
  }
}

buildTemperatureTable(temperaturas);
