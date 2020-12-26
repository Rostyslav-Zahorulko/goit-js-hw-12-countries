import articleTpl from '../templates/article.hbs';
import listTpl from '../templates/list.hbs';
import refs from '../js/refs';

function updateMarkup(countryInfo) {
  console.log(countryInfo.length);

  console.log(countryInfo);

  if (countryInfo.length === 1) {
    const markup = articleTpl(countryInfo);
    refs.container.insertAdjacentHTML('beforeend', markup);
  } else if (countryInfo.length > 1 && countryInfo.length < 11) {
    const markup = listTpl(countryInfo);
    refs.container.insertAdjacentHTML('beforeend', markup);
  }
}

export default updateMarkup;
