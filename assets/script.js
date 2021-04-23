// FUNCTIONALITY INDEX

// 1. Define way to fetch information from text box.
// 1.1 Define object to fetch text
// 1.2 Define object to fetch button

var cityInput = document.getElementById("textInput");
var searchButton = document.getElementById("searchButton");

// 1.3 Create function to fetch input when button is clicked
function handleClickSearchBtn (event) {

    // 1.4 Prevent default behavior of the form
    event.preventDefault();

    // 1.5 Create variable to store what was fetched
    var cityName = cityInput.value;

    // 1.6 If statement in case no value is inputted 
        if (cityName === "") {

            //2.6.1 Error statement
            window.alert ("You need to enter a City.");

            //2.6.2 End of if statement
            return;
        }
       
        getWeatherInformation(cityName);

};



// 2. Define event listner on button

searchButton.addEventListener("click", handleClickSearchBtn);

// 3. Proceed to get weather information

function getWeatherInformation (cityName) {

    // 3.1 Define all things you need to fetch the info.
    // 3.1.1 You need a key
    const API_KEY = "3811eb5e7320e92569d4380a3f96e0a0";
    // 3.1.2 You need a URL
    // NOTE to person who is grading: I know that the excercise requires to go to the one call API (https://openweathermap.org/api/one-call-api). However for some reason I was not able to access it for free so I'm using "Current Weather Data"
    const BASE_URL = "http://api.openweathermap.org/data/2.5";
    // saving request url to a variable using Current Weather API
    let requestUrl = BASE_URL + "/weather?q=";
    
    // 3.1.3 Modifying variable to include the city that was entered.
    requestUrl= requestUrl + cityName + "&appid=" + API_KEY;
    

    // 3.1.4. Adding fetch function to go to json and be able to use it extracting latitude and longitude.
    fetch(requestUrl) 
        //Remote server gives response (promise) and stores it in parameter
        .then(function (response) {
            //Parameter response (promise) is transformed into a json object
            return response.json(); 
        })

    // When it reaches this point the data is in JSON format
    // Doing a then and calling a function with parameter cityData where I'm storing the JSON. 
        .then(function (cityData) {

        //Testing to see if JSON works and I can pull info
        console.log (cityData);
        console.log (cityData.main.temp);
        // Next up: getting info from JSON and putting it in the board.
        const temperature = (cityData.main.temp) - 273.15;
        const roundedTemp = temperature.toFixed(2);
        const humidity = cityData.main.humidity;
        const windSpeed = cityData.wind.speed;


// last minute additions (after class) need a 2nd api to get lat and long.
        const lat = cityData.coord.lat;
        const lon = cityData.coord.lon;
        console.log (lat);
        console.log (lon);

// added a 2nd api to get future weather.
        const BASE_URL2 = "https://api.openweathermap.org/data/2.5/onecall?";

// creating a variable to fetch the info from the new api
        let requestUrl2 = BASE_URL2 + "lat=" + lat + "&lon=" + lon + "&units=metric" + "&appid=" + API_KEY;

// fetching info.
    fetch(requestUrl2) 

// info comes back as a promise
        .then(function(cityData2) {

// transforming info into a json
        return cityData2.json();
     })

// creating parameter cityData2 where I'm storing the json
        .then(function (cityData2) {
        console.log(cityData2);

// creating variable uv to store uv info fetched from json
        var uv = cityData2.daily[0].uvi;
        console.log(uv);
// changing info in screen
        const uvText = document.getElementById("currentUvIndex");
        uvText.innerText = uv; 

// creating variables tempPlus and windPlus to store tomorrows info 
        var tempPlus1 = cityData2.daily[1].temp.day;
        var windPlus1 = cityData2.daily[1].wind_speed;

        const tempPlus1Text = document.getElementById("card5dayForecastTemperatureDay1");
        tempPlus1Text.innerText = tempPlus1;
        const rainPlus1Text = document.getElementById("card5dayForecastWindDay1");
        rainPlus1Text.innerText = windPlus1;   


        var tempPlus2 = cityData2.daily[2].temp.day;
        var windPlus2 = cityData2.daily[2].wind_speed;

        const tempPlus2Text = document.getElementById("card5dayForecastTemperatureDay2");
        tempPlus2Text.innerText = tempPlus2;
        const rainPlus2Text = document.getElementById("card5dayForecastWindDay2");
        rainPlus2Text.innerText = windPlus2; 


        var tempPlus3 = cityData2.daily[3].temp.day;
        var windPlus3 = cityData2.daily[3].wind_speed;

        const tempPlus3Text = document.getElementById("card5dayForecastTemperatureDay3");
        tempPlus3Text.innerText = tempPlus3;
        const rainPlus3Text = document.getElementById("card5dayForecastWindDay3");
        rainPlus3Text.innerText = windPlus3; 


        var tempPlus4 = cityData2.daily[4].temp.day;
        var windPlus4 = cityData2.daily[4].wind_speed;

        const tempPlus4Text = document.getElementById("card5dayForecastTemperatureDay4");
        tempPlus4Text.innerText = tempPlus4;
        const rainPlus4Text = document.getElementById("card5dayForecastWindDay4");
        rainPlus4Text.innerText = windPlus4; 
        

        var tempPlus5 = cityData2.daily[5].temp.day;
        var windPlus5 = cityData2.daily[5].wind_speed;

        const tempPlus5Text = document.getElementById("card5dayForecastTemperatureDay5");
        tempPlus5Text.innerText = tempPlus5;
        const rainPlus5Text = document.getElementById("card5dayForecastWindDay5");
        rainPlus5Text.innerText = windPlus4; 

        });


        //Modifying display in the board with the information
        const temperatureText = document.getElementById("currentTemperature");
        temperatureText.innerText = roundedTemp;

        const humidityText = document.getElementById("currentHumidity");
        humidityText.innerText = humidity;

        const windSpeedText = document.getElementById("currentWindSpeed");
        windSpeedText.innerText = windSpeed; 
        


        
        //Doing same process to substitute Place Holder Text City 
        const city = cityData.name;
        console.log(city);

        var cityNameText = document.getElementById("currentCityName");
        console.log(cityNameText);
        cityNameText.innerText = city;        


        //Defining variable month/date to call moment
        // second variable to put dates in the cards
        var date = moment().format('MM'+ '/' +"DD");
        console.log(date);
        var forecastCardDay1 = document.getElementById("card5dayHeaderD1");
        forecastCardDay1.innerText = date;

        //Future Dates: consulted https://stackoverflow.com/questions/35441820/moment-js-tomorrow-today-and-yesterday
        // first line is getting the dates from Moment
        // second line is substituting them in the cards

        let datePlus1= moment().add(1, 'days').format('MM'+ '/' +"DD");
        var forecastCardDay2 = document.getElementById("card5dayHeaderD2");
        forecastCardDay2.innerText = datePlus1;

        let datePlus2= moment().add(2, 'days').format('MM'+ '/' +"DD");
        console.log(datePlus2);
        var forecastCardDay3 = document.getElementById("card5dayHeaderD3");
        forecastCardDay3.innerText = datePlus2;

        let datePlus3= moment().add(3, 'days').format('MM'+ '/' +"DD");
        console.log(datePlus3);
        var forecastCardDay4 = document.getElementById("card5dayHeaderD4");
        forecastCardDay4.innerText = datePlus3;

        let datePlus4= moment().add(4, 'days').format('MM'+ '/' +"DD");
        console.log(datePlus4);
        var forecastCardDay5 = document.getElementById("card5dayHeaderD5");
        forecastCardDay5.innerText = datePlus4;














            // Added last moment to continue functionality with part 4 (see below)
            saveRecentCities(city);

        })
    


    console.log("Este se ejecuta antes de la promesa")

}

// 4. Next step is to add functionality to add buttons and store in local storage.

// 4.1 Defining a function and passing down the city name value
 function saveRecentCities (cityNameToSave) {
    
    // defining the name to store in local storage
    const weatherLocalStorageKey = "weather-app";

    // go to localStorage to see whether the key exists



 }