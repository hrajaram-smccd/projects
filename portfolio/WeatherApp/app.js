"using strict;"
/* HW 11 - Hamsa Rajaraman */

// window.alert("Connected");

// get document nodes
let weatherInfo = document.getElementById("weatherInfo");
let zipcode = document.getElementById("zipcode");

// register event listner
document.getElementById("forecast").addEventListener("click", getData);

// click event handler for weatherInfo
function getData() {
    console.log("clicked weatherInfo");
    getWeather( zipcode.value );
}

function getWeather( zip ) {
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "1307007a7da1aeb5b59930a312a42cd3";

    let query = "zip=" +zip + "&units=imperial&appid=" + apiKey;

    let url = endpoint + "?" + query;

    // create AJAX object
    let xhr = new XMLHttpRequest();

    // add response event listener 
    xhr.addEventListener("load", responseReceivedHandler);

    // setup AJAX object
    xhr.responseType = "json";
    xhr.open("GET", url);

    // send data.
    xhr.send();
}

// response handler
function responseReceivedHandler() {
    if (this.status === 200) {
        let data = this.response;

        console.log(data);
        console.log(data.name);

        weatherInfo.innerHTML = 
            "<p> City : " + data.name + "</p>" + 
            "<p> Current Temperature : " + data.main.temp + "&deg;F" + "</p>" + 
            "<p> Desc : " + data.weather[0].description + "</p>" + 
            "<p> Humidity : " + data.main.humidity + "%" + "</p>";
    }
    else {
        weatherInfo.innerHTML = "Weather data not available";
    }
}