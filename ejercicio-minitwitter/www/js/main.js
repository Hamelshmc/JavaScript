'use strict';

const button = document.querySelector('button');
const listaTweets = document.getElementById('tweets');

button.addEventListener('click', (event) => {
  event.preventDefault();

  let date = new Date().toLocaleDateString();

  const tweet = document.createElement('li');

  const buttonBorrarTweet = document.createElement('button');
  buttonBorrarTweet.textContent = 'borrar';

  const time = document.createElement('time');
  time.innerHTML = `${date}`;

  const footer = document.createElement('footer');

  const text = document.getElementById('tweet').value;

  listaTweets.appendChild(tweet);
  tweet.textContent = text;

  tweet.appendChild(footer);

  footer.appendChild(time);
  footer.appendChild(buttonBorrarTweet);
});

listaTweets.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    event.target.closest('li').remove();
  }
});
