export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
