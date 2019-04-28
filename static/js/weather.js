var xhr = new XMLHttpRequest();
var apiKey = '&appid=f184ae1290f9c405bd84c12d1b76f8c7';
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk';


function getWeatherData(cb) {

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};

xhr.open("GET", apiUrl+ apiKey);
xhr.send();


}

function writeToDocument(cb) {
    getWeatherData(function(data) {
        console.dir(data);
        document.getElementById("data").innerHTML = 'The weather for' + data.name+ 'is currently ' + data.weather[0].description;
    });
}