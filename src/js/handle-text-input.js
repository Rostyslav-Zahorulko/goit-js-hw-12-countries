import refs from '../js/refs';
import fetchCountries from '../js/fetch-countries';
import updateMarkup from '../js/update-markup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(handleTextInput, 500));

function handleTextInput(event) {
  const countryName = event.target.value;

  if (countryName === '') {
    return;
  }

  refs.container.innerHTML = '';

  fetchCountries(countryName).then(updateMarkup);
}
