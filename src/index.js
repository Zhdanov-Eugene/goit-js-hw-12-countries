// console.log('Привет');
import getRefs from './js/get-refs';
import fetchCountries from './js/fetchCountries';
import countriesCardTpl from './tamplates/countries-card.hbs';
import cardCountryTpl from './tamplates/country.hbs';
import { alert, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import "./sass/main.scss";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');
const refs = getRefs();

refs.inputRef.addEventListener('input', debounce(onInputFilter, 500));

function onInputFilter(event) {
    const value = event.target.value;

    fetchCountries(value)
        .then(countries => {

            cleanMarkup();

            if (countries.length === 1) {
                renderCountriesMarkup(countries, cardCountryTpl);
            }

            if (countries.length < 10 && countries.length > 1) {
                renderCountriesMarkup(countries, countriesCardTpl);
            }

            if (countries.length > 10) {
                alert({
                    text: 'Type more specific query!',
                    delay: 2000,
                });
            }
        })
        .catch(onError);
    console.log('catch is in progress');
}

function renderCountriesMarkup(array, tamplate) {
    const markup = tamplate(array);
    refs.countryContainerRef.insertAdjacentHTML('beforeend', markup);
}

function onError() {
    error({
        text: 'Nothing on your request! :(',
        delay: 2000,
    });
}

function cleanMarkup() {
    refs.countryContainerRef.innerHTML = '';
}