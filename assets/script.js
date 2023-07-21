// Selectors to link html elements
let submitBtn = document.querySelector('');

let cityResult = [];

// Accuweather API 
const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';

// Search function and fetches API request 
function searchResults(){
   fetch(apiUrl + apiKey)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            //modal alert goes here
        });
};