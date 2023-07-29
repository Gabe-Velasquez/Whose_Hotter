// Selectors to link html elements
// let submitBtn = document.querySelector('#');
let countrySearch = document.getElementById('#');
let city1SelectorEl = document.getElementById('city1selector');
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
var buttonEl = document.getElementById("button");
var locationTest = true;

// USA
//   newYork = 2627448, 40.776676, -73.971321
var LosAngeles = "34.052235, -118.243683"
2626754,
//   lasVegas = 329506, 36.188110, -115.176468
//   miami = 3593071, 25.761681, -80.191788
// Mexico
//   mexcioCity= 1862904, 19.432608, -99.133209
//   Cancun= 235049, 21.1743, -86.8466
//   Guadalajara= 243735, 20.659698, -103.349609
//   Tijuana= 241912, 32.522499, -117.046623
// Germany
//   Berlin= 2601546,52.520008, 13.404954
//   Munich= 3557791, 48.137154, 11.576124
//   Frankfurt= 2601814, 50.110924, 8.682127
//   Hamburg= 3352352, 53.551086, 9.993682
// South Korea
//   Seoul= 226064,
//   Busan= 2332214, 35.166668, 129.066666
//   Gwangju= 2331839, 35.166668, 126.916664
//   Incheon= 2331954, 37.456257, 126.705208
// Australia
//   Sydney= 3496594, -33.865143, 151.209900
//   Melbourne= 26163,-37.840935, 144.946457
//   Cairns= 3494533, -16.925491, 145.754120
  // var Adelaide= "-34.921230,138.599503"
    
// 3497809

// // let cityResult = [];

// Accuweather API 
// const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
// let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';

// add even listner that picks city and enters that var in for locationkey
city1.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(city1.textContent);
  var cityPicked = city1.textContent
  console.log(cityPicked);  
});

city1SelectorEl.city1.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(city1SelectorEl.textContent);
});
  
  
  
  
  function locationKey(){
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q=${LosAngeles}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
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
    buttonEl.addEventListener("click", locationKey); 
      
      
      
      
      
// RESTcountry API fetch
function citySearch(){
  fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
    .then(function(response){
    return response.json();
  })
  .then(function(data){
    
  })
  .catch(function(error){
    //Modal
    //Modal
  });
});
}
// drop down countries
// if function so when a country is picked the cities option changes in the next box

countryUS.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "United States";
    cityOption1.textContent = "LosAngeles";
    cityOption2.textContent = "New York";
    cityOption3.textContent = "Las Vegas";
    cityOption4.textContent = "Miami";
    
    
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



    
    
    
    
  