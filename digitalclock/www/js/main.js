// DIGITAL HOUR
'use strict';

const insertBackgroundGreet = (hour) => {
  const h2 = document.querySelector('h2');
  const body = document.querySelector('body');

  if (hour < 12 && hour >= 6) {
    body.setAttribute('class', 'morning');
    h2.innerHTML = `Good morning`;
  } else if (hour >= 12 && hour < 23) {
    body.setAttribute('class', 'afternoon');
    h2.innerHTML = `Good afternoon`;
  } else {
    body.setAttribute('class', 'night');
    h2.innerHTML = `Good night`;
  }
};

function insertTime() {
  const time = new Date();

  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  const h1 = document.querySelector('h1');

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let separator = seconds % 2 === 0 ? ':' : ' ';
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  h1.dataset.time = [hour, minutes, seconds];
  h1.innerHTML = `${hour}${separator}${minutes}${separator}${seconds}`;

  insertBackgroundGreet(hour);
}

setInterval(() => {
  insertTime();
}, 1000);
