// Selectors to link html elements
let countrySearch = document.getElementById('#');
var country1 = document.getElementById("country");
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

var countryMenu1 = document.getElementById("dropdown-menu4");
var countryMenu2 = document.getElementById("dropdown-menu5"); 
var flagImg;
var flag1 = document.getElementById("img1");
var flag2 = document.getElementById("img2");
var lang1 = document.getElementById("lang1");
var pop1 = document.getElementById("pop1");
var currency1 = document.getElementById("currency1");
var lang2 =  document.getElementById("lang2");
var pop2 = document.getElementById("pop2");
var currency2 = document.getElementById("currency2");
var countryPopulation
var currencySymbol 
var currencyName
var language
var capital


// Accuweather API 
const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';



function locationKey(){
  fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q=${Adelaide}`)
    .then(function(response){
      return response.json();
  })
    .then(function(data){
      console.log(latlon.textContent);
      console.log(data.Key);
      var locationNum = (data.Key);
      
      if (locationTest == true){  
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)      
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data);
          
        })
        .catch(function(error){
          // modal alert goes here
        })
      }})     
      .catch(function(error){
        //modal alert goes here
      });
    };
    
    // temp search button to check weather api

// RESTcountry API fetch
function citySearch(countryCode){  
    return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
          // countryData = data
          // console.log(data)
          return data

        })
        .catch(function(error){
            //Modal
        });
};

    
    latlon.addEventListener("click", locationKey);
    latlon2.addEventListener("click", locationKey);    
      
  countryUS.addEventListener("click", function(event) {
      event.preventDefault();
      country.textContent = "United States";
      cityOption1.textContent = "LosAngeles";
      city1.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(LosAngeles);        
      });
      cityOption2.textContent = "New York";
      city2.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(NewYork);        
      });
      cityOption3.textContent = "Las Vegas";
      city3.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(LasVegas);        
      });
      cityOption4.textContent = "Miami";
      city4.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(Miami);        
      });
    
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
    cityOption5.textContent = "Los Angeles";
    cityOption6.textContent = "New York";
    cityOption7.textContent = "Las Vegas";
    cityOption8.textContent = "Miami";

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

// Event listener for Country 1 using id dropdown-menu4
countryMenu1.addEventListener("click", function(event) {
  event.stopPropagation();

  lang1.textContent = " ";                  
  pop1.textContent = " ";
  currency1.textContent = " ";

  // Takes the country code as the search filter for RestCountries API
  citySearch(event.target.id).then(function(data) {
    getCountry(data)

    lang1.append("Language: " + language);
    pop1.append("Population: " + countryPopulation);
    currency1.append("Currency: " + currencyName + " " + currencySymbol)
    flag1.alt = "country flag"
    flag1.src = flagImg;
  })
})

// Event listener for Country 2 using dropdown-menu5
countryMenu2.addEventListener("click", function(event) {
  event.stopPropagation();

  lang2.textContent = " ";                   // Clears previous results
  pop2.textContent = " ";
  currency2.textContent = " ";

  var code = event.target.id              
  code = code.slice(0, -1);                             // Deletes the number 2 from the id for all column 2 menu options
  
  // Takes the country code
  citySearch(code).then(function(data) {
    getCountry(data)

    lang2.append("Language: " + language);
    pop2.append("Population: " + countryPopulation);
    currency2.append("Currency: " + currencyName + " " + currencySymbol)
    flag2.alt = "country flag"
    flag2.src = flagImg;
  })
})


function getCountry (dataArr) {             // DataArr is an array with index 0 being the country object
  for (var country of dataArr) {        

    var currencies = country.currencies;
    var countryFlag = country.flags;
    var countryLanguage = country.languages;
    countryPopulation = country.population;
    var countryCapital = country.capital;

    for (var currency in currencies) {                    // Access currency object inside the country object
      currencySymbol = currencies[currency].symbol;
      currencyName = currencies[currency].name;
    }

    for (var flag in countryFlag) {                     // Flag is the key inside the flag object
      if (flag == "svg"){
        flagImg = countryFlag[flag];
      }
    }

    for (var lang in countryLanguage) {                   // lang is the key inside the language obj
      language = countryLanguage[lang];
    }

    for (var capt in countryCapital) {
      capital = countryCapital[capt];
    }
  }
  return flagImg, currencyName, currencySymbol, countryPopulation, language, capital;
}
