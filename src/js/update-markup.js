import articleTpl from '../templates/article.hbs';
import listTpl from '../templates/list.hbs';
import refs from '../js/refs';
import error from '../js/notification';

function updateMarkup(countries) {
  console.log('countries: ', countries);
  console.log('amount of countries: ', countries.length);

  if (countries.length === 1) {
    const markup = articleTpl(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 && countries.length < 11) {
    const markup = listTpl(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
  } else {
    error({
      title: 'Пожалуйста, уточните запрос!',
      hide: true,
      delay: 2000,
    });
  }
}

export default updateMarkup;
