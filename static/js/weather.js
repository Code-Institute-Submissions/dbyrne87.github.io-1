var xhr = new XMLHttpRequest();
var apiKey = '&appid=f184ae1290f9c405bd84c12d1b76f8c7';
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';



function getWeatherData(cb) {

var currentCity = $('#address').val();    

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};

xhr.open("GET", apiUrl+ currentCity+ apiKey);
xhr.send();



}

function writeTheWeather(cb) {
    getWeatherData(function(data) {
        console.dir(data);
        document.getElementById("weatherdata").innerHTML = 'The weather for ' + data.name + ' is currently "' + data.weather[0].description + '" with a tempeture currently at ' + Math.round(data.main.temp-273.15) + '&#8451 and a max tempeture of ' + Math.round(data.main.temp_max-273.15) + '&#8451';
    });
}
