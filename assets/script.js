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
    
// 3497809

// // let cityResult = [];

// Accuweather API 
// const apiKey = 'j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp';
// let apiUrl = 'http://api.accuweather.com/locations/v1/search?q=san&apikey=';

// add even listner that picks city and enters that var in for locationkey
// this worked to get the right lat and lon into the location key function
// city1.addEventListener("click", function(evt) {
//   evt.preventDefault(); 
//     latlon.append(LosAngeles);
    
// }); 

  
  function locationKey(){
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=j3dU13wPqsC6XNhy4fabRe4Rta1qbIKp&q=${latlon.textContent}`)
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

         const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
            const date = new Date(data.DailyForecasts[0].Date);
            const formattedDate = date.toLocaleDateString('en-US', dateOptions);

            day1.textContent = formattedDate + " high of " + data.DailyForecasts[0].Temperature.Maximum.Value;
            console.log(data.DailyForecasts[0].Temperature.Maximum.Value)


          // day1.append(data.DailyForecasts[0].Date +" high of "+ data.DailyForecasts[0].Temperature.Maximum.Value);
          // console.log(data.DailyForecasts[0].Temperature.Maximum.Value)

          
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
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(MexcioCity);        
    });
    cityOption2.textContent = "Cancun";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
        latlon.append(Cancun); 
    });
    cityOption3.textContent = "Guadalajara";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Guadalajara);        
    });
    cityOption4.textContent = "Tijuana";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Tijuana);        
    });
    
    });

  countryDE.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Germany";
    cityOption1.textContent = "Berlin";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Berlin);        
    });
    cityOption2.textContent = "Munich";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Munich);        
    });
    cityOption3.textContent = "Frankfurt";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Frankfurt);        
    });
    cityOption4.textContent = "Hamburg";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Hamburg);        
    });

  });

  countryKR.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "South Korea";
    cityOption1.textContent = "Seoul";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Seoul);        
    });
    cityOption2.textContent = "Busan";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Busan);        
    });
    cityOption3.textContent = "Gwangju";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Gwangju);        
    });
    cityOption4.textContent = "Incheon";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Incheon);        
    });    
  });  
    
  countryAU.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Australia";
    cityOption1.textContent = "Sydney";
    city1.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Sydney);        
    });
    cityOption2.textContent = "Melbourne";
    city2.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Melbourne);        
    });
    cityOption3.textContent = "Cairns";
    city3.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Cairns);        
    });
    cityOption4.textContent = "Adelaide";
    city4.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon.append(Adelaide);        
    });
        
  });  

  countryUS2.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "United States";
    cityOption5.textContent = "LosAngeles";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(LosAngeles);        
    });
    cityOption6.textContent = "New York";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(NewYork);        
    });
    cityOption7.textContent = "Las Vegas";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(LasVegas);        
    });
    cityOption8.textContent = "Miami";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Miami);        
    });

  }); 

  countryMX2.addEventListener("click", function(event) {
    event.preventDefault();
  country.textContent = "Mexico";
    cityOption5.textContent = "Mexico City";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(MexcioCity);        
    });
    cityOption6.textContent = "Cancun";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
        latlon2.append(Cancun);
    }); 
    cityOption7.textContent = "Guadalajara";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Guadalajara);        
    });
    cityOption8.textContent = "Tijuana";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Tijuana);        
    });
        
  });  
    
  countryDE2.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Germany";
    cityOption5.textContent = "Berlin";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Berlin);        
    });
    cityOption6.textContent = "Munich";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Munich);        
    });
    cityOption7.textContent = "Frankfurt";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Frankfurt);        
    });
    cityOption8.textContent = "Hamburg";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Hamburg);        
    });
        
  });

  countryKR2.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "South Korea";
    cityOption5.textContent = "Seoul";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Seoul);        
    });
    cityOption6.textContent = "Busan";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Busan);        
    });
    cityOption7.textContent = "Gwangju";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Gwangju);        
    });
    cityOption8.textContent = "Incheon";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Incheon);        
    }); 
    
  });    

  countryAU2.addEventListener("click", function(event) {
    event.preventDefault();
    country.textContent = "Australia";
    cityOption5.textContent = "Sydney";
    city5.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Sydney);        
    });
    cityOption6.textContent = "Melbourne";
    city6.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Melbourne);        
    });
    cityOption7.textContent = "Cairns";
    city7.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Cairns);        
    });
    cityOption8.textContent = "Adelaide";
    city8.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      latlon2.append(Adelaide);        
    });
    
  });   



    
    
    
    
