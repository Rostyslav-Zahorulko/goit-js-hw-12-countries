import country from '../templates/country.hbs';
import refs from './refs';

export default function updateMarkup(info) {
  const markup = country(info);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
