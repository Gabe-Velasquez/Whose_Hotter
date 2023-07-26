// Selectors to link html elements
// let submitBtn = document.querySelector('#');
let countrySearch = document.getElementById('#');
let citySelect = document.getElementById('#');
var countryUS = document.getElementById("us");
var countryMX = document.getElementById("mx");
var countryDE = document.getElementById("de");
var countryKR = document.getElementById("kr");
var countryAU = document.getElementById("au");
var cityOption1 = document.getElementById("city1");
var cityOption2 = document.getElementById("city2");
var cityOption3 = document.getElementById("city3");
var cityOption4 = document.getElementById("city4");


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
        .then(function(data){

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
        .then(function(data){
            
        })
        .catch(function(error){
            //modal alert goes here
        });
};

// drop down countries
// if function so when a country is picked the cities option changes in the next box
countryUS.addEventListener("click", function(event) {
    cityOption1.textContent = "LA";
    cityOption2.textContent = "NY";
    cityOption3.textContent = "MPLS";
    cityOption4.textContent = "LV";

  });

  countryMX.addEventListener("click", function(event) {
    cityOption1.textContent = "Mexico City";
    cityOption2.textContent = "Cancun";
    cityOption3.textContent = "Guadalajara";
    cityOption4.textContent = "Tijuana";

  });  

  countryDE.addEventListener("click", function(event) {
    cityOption1.textContent = "Berlin";
    cityOption2.textContent = "Munich";
    cityOption3.textContent = "Frankfurt";
    cityOption4.textContent = "Hamburg";

  });

  countryKR.addEventListener("click", function(event) {
    cityOption1.textContent = "Seoul";
    cityOption2.textContent = "Busan";
    cityOption3.textContent = "Gwangju";
    cityOption4.textContent = "Incheon";

  });  

  countryAU.addEventListener("click", function(event) {
    cityOption1.textContent = "Sydney";
    cityOption2.textContent = "Melbourne";
    cityOption3.textContent = "Cairns";
    cityOption4.textContent = "Adelaide";

  });  

// usCities:
//   losAngels
//   newYork
//   minneapolis

// germanyCities:





