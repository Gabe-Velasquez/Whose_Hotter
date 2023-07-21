// Selectors to link html elements
let submitBtn = document.querySelector('');
let countrySearch = document.getElementById('#');
let citySelect = document.getElementById('#');

let cityResult = [];

// Accuweather API 
const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';


// RESTcountry API fetch
function citySearch(){
    fetch(`ttps://restcountries.com/v3.1/name/${countrySearch}`)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            //Modal
        });
};

// Search function and fetches API request 
function weatherSearch(){
   fetch(apiUrl + apiKey)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            //modal alert goes here
        });
};
