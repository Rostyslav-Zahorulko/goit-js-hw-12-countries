import './styles.css';
// import refs from './js/refs';
// import fetchCountries from './js/fetch-countries';
// import updateMarkup from './js/update-markup';

const debounce = require('lodash.debounce');

import articleTpl from './templates/article.hbs';

const refs = {
  input: document.querySelector('.js-input'),
  article: document.querySelector('.js-article'),
};

refs.input.addEventListener('input', debounce(handleInput, 500));

function handleInput(event) {
  const countryName = event.target.value;

  refs.article.innerHTML = '';

  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
      const markup = articleTpl(data);
      refs.article.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
