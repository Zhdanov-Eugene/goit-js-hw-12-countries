const BASE_URL = `https://restcountries.eu/rest/v2`;

export default function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
        .then(response => response.json(),
    )

}
// файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.
// Response.prototype.json() - используется, когда от бекенда ожидаются данные в JSON - формате.

// const url = 'https://restcountries.eu/rest/v2/name/${searchQuery}';

// function fetchCountries(searchQuery) {
//     return fetch(url).then(response => response.json());
// }

// export default (fetchCountries);
