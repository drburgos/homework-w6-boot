// FUNCTIONALITY INDEX
// 1. Define API Key

var key = "cbbb3e31bb56d531f65d4b1b75f9df4e";

// 2. Define way to fetch information from text box.
// 2.1 Define object to fetch text
// 2.2 Define object to fetch button

var enterCity = document.getElementById("enterCityArea");
var searchButton = document.getElementById("searchButton");

// 2.3 Create function to fetch input when button is clicked
function getInfoFromSearchForm (event) {

// 2.4 Prevent default behavior
event.preventDefault();

// 2.5 Create variable to store what was fetched
var CityValue = document.getElementById("textInput").value;

// 2.6 If statement in case no value is inputted 
    if (CityValue === "") {

        //2.6.1 Error statement
        console.error ("You need to enter a City.");

        //2.6.2 End of if statement
        return;

// 2.7 call function to fetch weather information
     else {
         
        getWeatherInformation(CityValue);

    }

}

// 3. Define event listner on button

searchButton.addEventListener("click", getInfoFromSearchForm);

