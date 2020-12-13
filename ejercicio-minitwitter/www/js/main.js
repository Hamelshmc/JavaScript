'use strict';

const button = document.querySelector('button');
const listaTweets = document.getElementById('tweets');

const recoverData = localStorage.getItem('tweets');
let localStorageTweets = recoverData ? JSON.parse(recoverData) : [];
let generadorID = 0;

initTweets(localStorageTweets);

button.addEventListener('click', (event) => {
  event.preventDefault();
  let text = document.getElementById('tweet');

  if (text.value.length === 0 || text.value.length > 250) {
    window.alert('Esto no vale');
    return;
  }

  const newTweet = { content: text.value, date: buildDate(), id: generadorID++ };
  localStorageTweets.push(newTweet);
  localStorage.setItem('tweets', JSON.stringify(localStorageTweets));
  listaTweets.prepend(createTweet(newTweet));
  text.value = '';
});

listaTweets.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    event.target.closest('li').remove();
    const li = event.target.closest('li');

    li.dataset.id;
    localStorageTweets = localStorageTweets.filter((tweet) => tweet.id !== +li.dataset.id);
    localStorage.setItem('tweets', JSON.stringify(localStorageTweets));
    li.remove();
  }
});

function createTweet({ content, date, id }) {
  const tweet = document.createElement('li');
  const buttonBorrarTweet = document.createElement('button');
  buttonBorrarTweet.textContent = 'borrar';

  const time = document.createElement('time');
  time.textContent = date;

  const footer = document.createElement('footer');

  tweet.textContent = content;
  tweet.dataset.id = id;

  tweet.appendChild(footer);

  footer.appendChild(time);
  footer.appendChild(buttonBorrarTweet);

  return tweet;
}
function buildDate() {
  return new Date().toLocaleDateString();
}

function initTweets(tweets) {
  for (const tweet of tweets) {
    listaTweets.prepend(createTweet(tweet));
  }
}
