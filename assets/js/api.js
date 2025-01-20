'use strict';

const api_key = 'a0408e71ad339907a931e2da7dcf8cbc';
const imageBaseURL = 'https://image.tmdb.org/t/p/' ; 

// Fetching data from the API using the URL

const fetchDataFromServer = function(url , callback, optionalParam){
    fetch(url)
    .then(response=>response.json())
    .then(data => callback(data, optionalParam));
}

export{ imageBaseURL , api_key , fetchDataFromServer};