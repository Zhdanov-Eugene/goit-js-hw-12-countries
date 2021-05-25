
export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error fatching data');
        });
}


// файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.
// Response.prototype.json() - используется, когда от бекенда ожидаются данные в JSON - формате.
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//       return response.json();
//   })
//     .then(data => {
//         // data handling
//     })
//     .catch(error => {
//         // error handling
//     });