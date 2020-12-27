// import './js/notification';
import 'modern-normalize/modern-normalize.css';
import './css/styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetch-countries';
import updateMarkup from './js/update-markup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(handleInput, 500));

function handleInput(event) {
  const countryName = event.target.value;

  refs.container.innerHTML = '';

  fetchCountries(countryName).then(updateMarkup);
}
