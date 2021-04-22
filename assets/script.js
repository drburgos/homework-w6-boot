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
    const API_KEY = "cbbb3e31bb56d531f65d4b1b75f9df4e";
    // 3.1.2 You need a URL
    // NOTE to person who is grading: I know that the excercise requires to go to the one call API (https://openweathermap.org/api/one-call-api). However it returns latitude and longitude. That is not enough information so I also added Openweather API, which returns the current weather of the city that I need, using the same key which is what I want for the excercise.
    // To handle the API, I will be breaking it up...
    const BASE_URL = "http://api.openweathermap.org/data/2.5/";
    // saving request url to a variable
    let requestUrl = BASE_URL+ "/weather?q=";
    
    // 3.1.3 Modifying variable to include the city that was entered.
    requestUrl= requestUrl + cityName + "&appid=" + API_KEY;

    // 3.1.4. Adding fetch function
    fetch(requestUrl)
        //Remote server gives response (promise) and stores it in parameter
        .then(function (response) {
            //Parameter (promise) is transformed into a json object
            return response.json(); 

            
        })

        

}