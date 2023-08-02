// Selectors to link html elements
// let submitBtn = document.querySelector('#');

let countrySearch = document.getElementById('#');
// let citySelect = document.getElementById('#');
var country1 = document.getElementById("country");
var country2 = document.getElementById("country2");
var cityName1 = document.getElementById("cityName1");
var cityName2 = document.getElementById("cityName2");

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

var buttonEl = document.getElementById("button");
var locationTest = true;
var latlon = document.getElementById("latlon");
var latlon2 = document.getElementById("latlon2");

// USA
var NewYork = "40.776676, -73.971321"
var LosAngeles = "34.052235, -118.243683"
var LasVegas = "36.188110, -115.176468"
var Miami = "25.761681, -80.191788"
// Mexico
var MexcioCity="19.432608, -99.133209"
var Cancun= "21.1743, -86.8466"
var Guadalajara="20.659698, -103.349609"
var Tijuana="32.522499, -117.046623"
// Germany
var Berlin="52.520008, 13.404954"
var Munich="48.137154, 11.576124"
var Frankfurt= "50.110924, 8.682127"
var Hamburg="53.551086, 9.993682"
// South Korea
var Seoul= "37.532600, 127.024612"
var Busan= "35.166668, 129.066666"
var Gwangju= "35.166668, 126.916664"
var Incheon= "37.456257, 126.705208"
// Australia
var Sydney="-33.865143, 151.209900"
var Melbourne= "-37.840935, 144.946457"
var Cairns= "-16.925491, 145.754120"
var Adelaide= "-34.921230,138.599503"

// var countriesObj 
// var countryData
// var currency = " ";

var buttonEl = document.getElementById("button");
var locationTest = true;
var latlon = document.getElementById("latlon");
var latlon2 = document.getElementById("latlon2");
var day1 = document.getElementById("day1");

// USA
var NewYork = "40.776676, -73.971321"
var LosAngeles = "34.052235, -118.243683"
var LasVegas = "36.188110, -115.176468"
var Miami = "25.761681, -80.191788"
// Mexico
var MexcioCity="19.432608, -99.133209"
var Cancun= "21.1743, -86.8466"
var Guadalajara="20.659698, -103.349609"
var Tijuana="32.522499, -117.046623"
// Germany
var Berlin="52.520008, 13.404954"
var Munich="48.137154, 11.576124"
var Frankfurt= "50.110924, 8.682127"
var Hamburg="53.551086, 9.993682"
// South Korea
var Seoul= "37.532600, 127.024612"
var Busan= "35.166668, 129.066666"
var Gwangju= "35.166668, 126.916664"
var Incheon= "37.456257, 126.705208"
// Australia
var Sydney="-33.865143, 151.209900"
var Melbourne= "-37.840935, 144.946457"
var Cairns= "-16.925491, 145.754120"
var Adelaide= "-34.921230,138.599503"

// // let cityResult = [];

// Accuweather API, wont take as var, had to hard code into fucntion
// const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
// let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';


function locationKey(){
  fetch(`HTTPS://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q=${latlon.textContent}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
      console.log(latlon.textContent);
      console.log(data.Key);
      var locationNum = (data.Key);
      
      if (locationTest == true){  
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)      
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data);
          // with help from TA to format date correctly
         const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date = new Date(data.DailyForecasts[0].Date);
            const formattedDate = date.toLocaleDateString('en-US', dateOptions);

            day1.textContent = formattedDate + " high of " + data.DailyForecasts[0].Temperature.Maximum.Value;

          const dateOptions1 = { month: '2-digit', day: '2-digit', year: 'numeric' };
          const date1 = new Date(data.DailyForecasts[1].Date);
          const formattedDate1 = date1.toLocaleDateString('en-US', dateOptions1);  
            day2.textContent = formattedDate1 + " high of " + data.DailyForecasts[1].Temperature.Maximum.Value;
            
          const dateOptions2 = { month: '2-digit', day: '2-digit', year: 'numeric' };
          const date2 = new Date(data.DailyForecasts[2].Date);
          const formattedDate2 = date.toLocaleDateString('en-US', dateOptions2);  
            day3.textContent = formattedDate2 + " high of " + data.DailyForecasts[2].Temperature.Maximum.Value;

          const dateOptions3 = { month: '2-digit', day: '2-digit', year: 'numeric' };
          const date3 = new Date(data.DailyForecasts[3].Date);
          const formattedDate3 = date3.toLocaleDateString('en-US', dateOptions3);
            day4.textContent = formattedDate3 + " high of " + data.DailyForecasts[3].Temperature.Maximum.Value;
            
          const dateOptions4 = { month: '2-digit', day: '2-digit', year: 'numeric' };
          const date4 = new Date(data.DailyForecasts[4].Date);
          const formattedDate4 = date4.toLocaleDateString('en-US', dateOptions4);    
            day5.textContent = formattedDate4 + " high of " + data.DailyForecasts[4].Temperature.Maximum.Value;       
          
        })
        .catch(function(error){
         
        })
      }})     
    .catch(function(error){
       
      });
    };
    
    

// RESTcountry API fetch
function citySearch(countryCode){
  // original RestCountries API link: https://restcountries.com/v3.1/name/${searchCountry}
  // Search through entire list of countries: https://restcountries.com/v3.1/all
  
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

// city search for items stored in local storage and populating in navbar 
function cityStorage(){
  const key = Object.keys(localStorage); //need to build set item feature so we have places saved locally
  let keysToMake = 2;
  
// Loop through keys and creates entries
for (let i=0; i < Math.min(key.length, keysToMake); i++){
  let AElement = document.createElement('a');
  AElement.textContent = key[i];
  recentCity.appendChild(AElement);
  }
}


// drop down countries
// if function so when a country is picked the cities option changes in the next box

// Search function and fetches API request 
// function weatherSearch(){
//    fetch(apiUrl + apiKey)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//         })
//         .catch(function(error){
//           // modal alert goes here
//         })   
//       .catch(function(error){
//         //modal alert goes here
//       });
//     };

    function locationKey2(){
      fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q=${latlon2.textContent}`)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(latlon2.textContent);
        console.log(data.Key);
        var locationNum = (data.Key);
        
        if (locationTest == true){  
          fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationNum}?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp`)      
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log(data);
            // with help from TA to format date correctly
           const dateOptions6 = { month: '2-digit', day: '2-digit', year: 'numeric' };
              const date6 = new Date(data.DailyForecasts[0].Date);
              const formattedDate6 = date6.toLocaleDateString('en-US', dateOptions6);
              day6.textContent = formattedDate6 + " high of " + data.DailyForecasts[0].Temperature.Maximum.Value;
             
  
            const dateOptions7 = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date7 = new Date(data.DailyForecasts[1].Date);
            const formattedDate7 = date7.toLocaleDateString('en-US', dateOptions7);  
              day7.textContent = formattedDate7 + " high of " + data.DailyForecasts[1].Temperature.Maximum.Value;
              
            const dateOptions8 = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date8 = new Date(data.DailyForecasts[2].Date);
            const formattedDate8 = date8.toLocaleDateString('en-US', dateOptions8);  
              day8.textContent = formattedDate8 + " high of " + data.DailyForecasts[2].Temperature.Maximum.Value;
  
            const dateOptions9 = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date9 = new Date(data.DailyForecasts[3].Date);
            const formattedDate9 = date9.toLocaleDateString('en-US', dateOptions9);
              day9.textContent = formattedDate9 + " high of " + data.DailyForecasts[3].Temperature.Maximum.Value;
              
            const dateOptions10 = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date10 = new Date(data.DailyForecasts[4].Date);
            const formattedDate10 = date10.toLocaleDateString('en-US', dateOptions10);    
              day10.textContent = formattedDate10 + " high of " + data.DailyForecasts[4].Temperature.Maximum.Value;       
            
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
    
    latlon.addEventListener("click", locationKey);
    // had to make this locationkey2 to have it append the right part. also needed to make function
    latlon2.addEventListener("click", locationKey2);    
      
  countryUS.addEventListener("click", function(event) {
      event.preventDefault();
      country.textContent = "United States";
      cityOption1.textContent = "LosAngeles";
      city1.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(LosAngeles);     
        cityName1.textContent = "Los Angeles";    
      });
      cityOption2.textContent = "New York";
      city2.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(NewYork);     
        cityName1.textContent = "New York";    
      });
      cityOption3.textContent = "Las Vegas";
      city3.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(LasVegas);   
        cityName1.textContent = "Las Vegas";      
      });
      cityOption4.textContent = "Miami";
      city4.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        latlon.append(Miami);        
        cityName1.textContent = "Miami"; 
      });
    
    });


  countryMX.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Mexico";
    cityOption1.textContent = "Mexico City";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(MexcioCity);      
      cityName1.textContent = "Los Angeles";   
    });
    cityOption2.textContent = "Cancun";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
        latlon.append(Cancun); 
        cityName1.textContent = "Cancun"; 
    });
    cityOption3.textContent = "Guadalajara";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Guadalajara); 
      cityName1.textContent = "Guadalajara";        
    });
    cityOption4.textContent = "Tijuana";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Tijuana); 
      cityName1.textContent = "Tijuana"; 
            
    });
  });  

  countryDE.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Germany";
    cityOption1.textContent = "Berlin";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Berlin);    
      cityName1.textContent = "Berlin";     
    });
    cityOption2.textContent = "Munich";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Munich);        
      cityName1.textContent = "Munich"; 
    });
    cityOption3.textContent = "Frankfurt";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Frankfurt);      
      cityName1.textContent = "Frankfurt";   
    });
    cityOption4.textContent = "Hamburg";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Hamburg);  
      cityName1.textContent = "Hamburg";       
    });
  });

  countryKR.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "South Korea";
    cityOption1.textContent = "Seoul";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Seoul);      
      cityName1.textContent = "Seoul";   
    });
    cityOption2.textContent = "Busan";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Busan);        
      cityName1.textContent = "Busan"; 
    });
    cityOption3.textContent = "Gwangju";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Gwangju);       
      cityName1.textContent = "Gwangju";  
    });
    cityOption4.textContent = "Incheon";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Incheon);        
      cityName1.textContent = "Incheon"; 
    });    
  });  
    
  countryAU.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Australia";
    cityOption1.textContent = "Sydney";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Sydney);        
      cityName1.textContent = "Sydney"; 
    });
    cityOption2.textContent = "Melbourne";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Melbourne);      
      cityName1.textContent = "Melbourne";   
    });
    cityOption3.textContent = "Cairns";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Cairns);        
      cityName1.textContent = "Cairns"; 
    });
    cityOption4.textContent = "Adelaide";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Adelaide);     
      cityName1.textContent = "Adelaide";    
    }); 
  });  

  countryUS2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "United States";
    cityOption5.textContent = "Los Angeles";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(LosAngeles); 
      cityName2.textContent = "Los Angeles";        
    });
    cityOption6.textContent = "New York";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(NewYork);        
      cityName2.textContent = "New York"; 
    });
    cityOption7.textContent = "Las Vegas";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(LasVegas);        
      cityName2.textContent = "Las Vegas"; 
    });
    cityOption8.textContent = "Miami";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Miami);        
      cityName2.textContent = "Miami"; 
    });
  }); 

  countryMX2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Mexico";
    cityOption5.textContent = "Mexico City";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(MexcioCity);    
      cityName2.textContent = "Mexcio City";     
    });
    cityOption6.textContent = "Cancun";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
        latlon2.append(Cancun);
        cityName2.textContent = "Cancun"; 
    }); 
    cityOption7.textContent = "Guadalajara";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Guadalajara);     
      cityName2.textContent = "Guadalajara";    
    });
    cityOption8.textContent = "Tijuana";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Tijuana); 
      cityName2.textContent = "Tijuana";        
    }); 
  });  
    
  countryDE2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Germany";
    cityOption5.textContent = "Berlin";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Berlin);    
      cityName2.textContent = "Berlin";     
    });
    cityOption6.textContent = "Munich";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Munich);        
      cityName2.textContent = "Munich"; 
    });
    cityOption7.textContent = "Frankfurt";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Frankfurt);      
      cityName2.textContent = "Frankfurt";   
    });
    cityOption8.textContent = "Hamburg";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Hamburg);        
      cityName2.textContent = "Hamburg"; 
    });
  });

  countryKR2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "South Korea";
    cityOption5.textContent = "Seoul";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Seoul);     
      cityName2.textContent = "Seoul";    
    });
    cityOption6.textContent = "Busan";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Busan);        
      cityName2.textContent = "Busan"; 
    });
    cityOption7.textContent = "Gwangju";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Gwangju);      
      cityName2.textContent = "Gwangju";   
    });
    cityOption8.textContent = "Incheon";      
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Incheon);        
      cityName2.textContent = "Incheon"; 
    }); 
  });    

  countryAU2.addEventListener("click", function(event) {
    event.preventDefault();
    country2.textContent = "Australia";
    cityOption5.textContent = "Sydney";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Sydney);    
      cityName2.textContent = "Sydney";     
    });
    cityOption6.textContent = "Melbourne";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Melbourne);     
      cityName2.textContent = "Melbourne";    
    });
    cityOption7.textContent = "Cairns";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Cairns);        
      cityName2.textContent = "Cairns"; 
    });
    cityOption8.textContent = "Adelaide";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Adelaide);     
      cityName2.textContent = "Adelaid";    
    });
  });   

// Event listener for Country 1 using id dropdown-menu4
countryMenu1.addEventListener("click", function(event) {
  event.stopPropagation();

  // Takes the country code as the search filter for RestCountries API
  citySearch(event.target.id).then(function(data) {
    console.log(data)
    getCountry(data)

    lang1.append(" " + language);
    pop1.append(" " + countryPopulation);
    currency1.append(" " + currencyName + " " + currencySymbol)
    flag1.src = flagImg;
  })
})

// Event listener for Country 2 using dropdown-menu5
countryMenu2.addEventListener("click", function(event) {
  event.stopPropagation();

  // lang2.textContent(" ");                   // ALERT! Figure out how to clear the text when starting a new search !!
  // pop2.append(" ");
  // currency2.append(" ")

  var code = event.target.id              
  code = code.slice(0, -1);                             // Deletes the number 2 from the id for all column 2 menu options
  
  // Takes the country code
  citySearch(code).then(function(data) {
    console.log(data)
    getCountry(data)

    lang2.append(" " + language);
    pop2.append(" " + countryPopulation);
    currency2.append(" " + currencyName + " " + currencySymbol)
    flag2.src = flagImg;
  })
})


function getCountry (dataArr) {             // DataArr is an array with index 0 being the country object
  for (var country of dataArr) {        

    var currencies = country.currencies;
    var countryFlag = country.flags;
    var countryLanguage = country.languages;
    countryPopulation = country.population;
    console.log(countryPopulation);
    var countryCapital = country.capital;

    for (var currency in currencies) {                    // Access currency object inside the country object
      console.log(currencies[currency].symbol);
      console.log(currencies[currency].name);

      currencySymbol = currencies[currency].symbol;
      currencyName = currencies[currency].name;
    }

    for (var flag in countryFlag) {                     // Flag is the key inside the flag object
      if (flag == "svg"){
        flagImg = countryFlag[flag];
      }
    }

    for (var lang in countryLanguage) {                   // lang is the key inside the language obj
      console.log(countryLanguage[lang]);
      language = countryLanguage[lang];
    }

    for (var capt in countryCapital) {
      console.log(countryCapital[capt]);
      capital = countryCapital[capt];
    }
  }
  return flagImg, currencyName, currencySymbol, countryPopulation, language, capital;
}

cityStorage();