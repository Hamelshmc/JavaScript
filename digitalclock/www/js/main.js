// H1 hora
// h2 Buenos Días

// DIGITAL HOUR
'use strict';

const time = new Date();

let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const insertTime = (hour, minutes, seconds) => {
  return `${hour} ${minutes} ${seconds}`;
};

setInterval(() => {
  h1.innerHTML = insertTime(hour, minutes, seconds);
}, 1000);
