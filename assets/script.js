// Selectors to link html elements
// let submitBtn = document.querySelector('#');
let countrySearch = document.getElementById('#');
let citySelect = document.getElementById('#');
var country = document.getElementById("country");
var country2 = document.getElementById("country2");
var countryUS = document.getElementById("us");
var countryMX = document.getElementById("mx");
var countryDE = document.getElementById("de");
var countryKR = document.getElementById("kr");
var countryAU = document.getElementById("au");
var countryUS2 = document.getElementById("us2");
var countryMX2 = document.getElementById("mx2");
var countryDE2 = document.getElementById("de2");
var countryKR2 = document.getElementById("kr2");
var countryAU2 = document.getElementById("au2");
var cityOption1 = document.getElementById("city1");
var cityOption2 = document.getElementById("city2");
var cityOption3 = document.getElementById("city3");
var cityOption4 = document.getElementById("city4");
var cityOption5 = document.getElementById("city5");
var cityOption6 = document.getElementById("city6");
var cityOption7 = document.getElementById("city7");
var cityOption8 = document.getElementById("city8");


let cityResult = [];

// Accuweather API 
const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';


// RESTcountry API fetch
function citySearch(){
    fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
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
    event.preventDefault();
    country.textContent = "United States";
    cityOption1.textContent = "LA";
    cityOption2.textContent = "NY";
    cityOption3.textContent = "MPLS";
    cityOption4.textContent = "LV";

  });

  countryMX.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Mexico";
    cityOption1.textContent = "Mexico City";
    cityOption2.textContent = "Cancun";
    cityOption3.textContent = "Guadalajara";
    cityOption4.textContent = "Tijuana";

  });  

  countryDE.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Germany";
    cityOption1.textContent = "Berlin";
    cityOption2.textContent = "Munich";
    cityOption3.textContent = "Frankfurt";
    cityOption4.textContent = "Hamburg";

  });

  countryKR.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "South Korea";
    cityOption1.textContent = "Seoul";
    cityOption2.textContent = "Busan";
    cityOption3.textContent = "Gwangju";
    cityOption4.textContent = "Incheon";

  });  

  countryAU.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Australia";
    cityOption1.textContent = "Sydney";
    cityOption2.textContent = "Melbourne";
    cityOption3.textContent = "Cairns";
    cityOption4.textContent = "Adelaide";

  });  

  countryUS2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "United States";
    cityOption5.textContent = "LA";
    cityOption6.textContent = "NY";
    cityOption7.textContent = "MPLS";
    cityOption8.textContent = "LV";

  }); 

  countryMX2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Mexico";
    cityOption5.textContent = "Mexico City";
    cityOption6.textContent = "Cancun";
    cityOption7.textContent = "Guadalajara";
    cityOption8.textContent = "Tijuana";

  });  

  countryDE2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Germany";
    cityOption5.textContent = "Berlin";
    cityOption6.textContent = "Munich";
    cityOption7.textContent = "Frankfurt";
    cityOption8.textContent = "Hamburg";

  });

  countryKR2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "South Korea";
    cityOption6.textContent = "Seoul";
    cityOption7.textContent = "Busan";
    cityOption8.textContent = "Gwangju";
    cityOption9.textContent = "Incheon";

  });    

  countryAU2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Australia";
    cityOption5.textContent = "Sydney";
    cityOption6.textContent = "Melbourne";
    cityOption7.textContent = "Cairns";
    cityOption8.textContent = "Adelaide";

  });   







