import axios from 'axios';


var BASE_URL = 'https://rickandmortyapi.com/api/character';
export const ClientService = axios.get(BASE_URL)
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    }); 