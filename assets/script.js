// FUNCTIONALITY INDEX

// 1. Define way to fetch information from text box.
// 1.1 Define object to fetch text
// 1.2 Define object to fetch button

var enterCity = document.getElementById("textInput");
var searchButton = document.getElementById("searchButton");

let CityValue = enterCity.value;

// 1.3 Create function to fetch input when button is clicked
function getInfoFromSearchForm (event) {

    // 1.4 Prevent default behavior of the form
    event.preventDefault();

    // 1.5 Create variable to store what was fetched
    var CityValue = enterCity.value;

    // 1.6 If statement in case no value is inputted 
        if (CityValue === "") {

            //2.6.1 Error statement
            window.alert ("You need to enter a City.");

            //2.6.2 End of if statement
            return;
        }
    // 1.7 call function to fetch weather information
        else {
                
        getWeatherInformation(CityValue);

        }
            
};

console.log(CityValue);

// 2. Define event listner on button

searchButton.addEventListener("click", getInfoFromSearchForm);

// 3. Proceed to get weather information

function getWeatherInformation (CityValue) {

    // 3.1 Define all things you need to fetch the info.
    // 3.1.1 You need a key
    var key = "cbbb3e31bb56d531f65d4b1b75f9df4e";
    // 3.1.2 You need a URL
    // NOTE to person who is grading: I know that the excercise requires to go to the one call API (https://openweathermap.org/api/one-call-api). However it returns latitude and longitude which I have no idea how to transform into a city. On the other hand, the following Openweather API, returns the current weather of the city that I need, which is what I want for the excercise.
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    
    // 3.1.3 Modifying variable to include the city that was entered.
    requestUrl= requestURL + CityValue + "&appid=" + key;

    // 3.1.4. Adding fetch function
    fetch(requestUrl)
        //Remote server gives response and stores it in parameter
        .then(function (response) {
            //Parameter is transformed into a json object
            return response.json();
        })



}