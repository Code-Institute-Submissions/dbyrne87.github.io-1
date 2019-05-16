/* global $ */

//Run Functions when "Let's Go" button is clicked
function updateCity() {
    renderMap();
    writeTheWeather();
    writeToDocument();
    displayDiv();
}

////////////////////////////////////////////////////////////////////////////////

//Resets Fields when #whereTo button is clicked so that a new search can be made without refreshing the page
    $("#whereTo").on('click', function() {
        $("#cityInfo").html("");
        $('#continent').val([""]);
        $('#city').val([""]);
        
        
    });
    

////////////////////////////////////////////////////////////////////////////////    

//Get and Display Json data to the Dynamic Dropdown Modal
load_json_data('continent');

function load_json_data(id, parent_id) {

    var html_code = '';

    $.getJSON('/data/city_info_data.json', function(data) { //Get Json data from file

        html_code += '<option value="">Select ' + id + '</option>';

        $.each(data, function(key, value) {
            if (id == 'continent') {

                if (value.parent_id == '0') { // If the item has a parent ID of 0 then it is a Continent 

                    html_code += '<option value="' + value.id + '">' + value.name + '</option>'; // Append Continents to html_code
                }
            } else {
                if (value.parent_id == parent_id) { // If the parent ID's are already loaded 

                    html_code += '<option value="' + value.id + '">' + value.name + '</option>'; // Append Continents to html_code
                }
            }
        });

        $('#' + id).html(html_code); //Load the data to the field

    });

}

$(document).on('change', '#continent', function() { // Listen to a change in the #continent dropdown
    var continent_id = $(this).val(); //What was clicked
    if (continent_id != '') {
        load_json_data('city', continent_id); //Load the data that has the same parent_id value
    } else {

         $('#continent').val([""]); //If nothing is clicked or an error this is the default values for both fields
         $('#city').val([""]); 
    }
});

////////////////////////////////////////////////////////////////////////////////

//Get and Display weather Data from OpenweatherMaps Api to the user
var xhr = new XMLHttpRequest();
var apiKey = '&appid=f184ae1290f9c405bd84c12d1b76f8c7';
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

function getWeatherData(cb) { //Get weather data from api 

    var currentCity = $('#address').val();
    var findCharacterComma = ",";
    var findCharacterHyphen = "-";

    if (currentCity.indexOf(findCharacterComma) > -1) { // To fix errors when calling api, sends everything before the first comma
        var parsedCity = currentCity.substring(0, currentCity.indexOf(","));

    } else if (currentCity.indexOf(findCharacterHyphen) > -1) { // To fix errors when calling api, sends everything before the first hyphen
        var parsedCity = currentCity.substring(0, currentCity.indexOf("-"));
    }

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { //If the api finds the area
            cb(JSON.parse(this.responseText));
        } else if (this.status == 404) { //If the api cannot find the area 
            $(".sun-shower, .thunder-storm, .cloudy, .flurries, .sunny, .rainy").css("display", "none"); // Clears any icons from previous searches
            $("#weatherdata").html('Weather data cannot be found for this destination');

        }
    };

    xhr.open("GET", apiUrl + parsedCity + apiKey);
    xhr.send();

}


function writeTheWeather() { // Work with Json Data returned for area
    getWeatherData(function(data) {

        $(".sun-shower, .thunder-storm, .cloudy, .flurries, .sunny, .rainy").css("display", "none"); // Clears any icons from previous searches

        if ([data.weather[0].main] == "Clouds" || [data.weather[0].main] == "Fog" || [data.weather[0].main] == "Mist") { // Displays the correct icon an alert background colour depending on the weather
            $(".cloudy").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-secondary col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Clear") {
            $(".sunny").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-warning col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Drizzle") {
            $(".sun-shower").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-primary col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Rain") {
            $(".rainy").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-dark col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Thunderstorm") {
            $(".thunder-storm").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-danger col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Snow") {
            $(".flurries").css("display", "block");
            $("#weatherdata").attr('class', 'alert alert-light col-sm-4 mx-auto text-center');

        } else if ([data.weather[0].main] == "Smoke" || [data.weather[0].main] == "Haze" || [data.weather[0].main] == "Dust" || [data.weather[0].main] == "Sand" || [data.weather[0].main] == "Dust" || [data.weather[0].main] == "Ash" || [data.weather[0].main] == "Squall" || [data.weather[0].main] == "Tornado") {
            $("#weatherdata").attr('class', 'alert alert-warning col-sm-4 mx-auto text-center');
        }
        // Adds the weather data in a readable response to the user
        $("#weatherdata").html('The weather for ' + data.name + ' is currently "' + data.weather[0].description + '" with a temperature currently at ' + Math.round(data.main.temp - 273.15) + '&#8451 and a max temperature of ' + Math.round(data.main.temp_max - 273.15) + '&#8451');
    });
}


var val;

function writeToDocument() {
    $.getJSON("/data/city_info_data.json", function(data) { //Get Json Data from file 

        // Working with JSON data below
        var val = $('#city').val(); //Get the current dropdown value of #city dropdown
        if (val != "") { //If value is not empty then add this data below to #cityInfo, if 8 add this ....and so on 
            $('#cityInfo').html('<p class="hiddenDivInner">About ' + data[val - 1].name + '</p></br><img style="width: 100%; max-width:1440px; max-height: 250px" src="' + data[val - 1].image_url + '" alt="' + data[val - 1].alt_tag + '"> </br></br> <p id="border">' + data[val - 1].text + '</p>');


        } else {
            $('#cityImage').attr('src', '');
            $('#cityText').html('');

        }
    });

}

////////////////////////////////////////////////////////////////////////////////

//Fade in Hidden Div Section when user clicks "Let's"
function displayDiv() { //The fade in effect for the hidden div
    $(".hiddenDiv").fadeIn(2000, function() {
        $(".hiddenDiv").css("display", "block");
    });
}

//All the types of amenities that can be searched for in the map
var types = ["airport", "amusement_park", "aquarium", "art_gallery", "atm", "bank", "bar", "bowling_alley", "bus_station", "cafe", "campground", "car_rental", "casino", "church", "embassy", "gas_station", "gym", "hair_care", "hindu_temple", "hospital", "lodging", "meal_takeaway", "mosque", "movie_theater", "museum", "night_club", "park", "parking", "pharmacy", "restaurant", "shopping_mall", "spa", "stadium", "subway_station", "synagogue", "taxi_stand", "train_station", "transit_station", "zoo"];
var html;

$.each(types, function(index, value) { //Get each value from Types and make them more readable to the user add them to #typeholder dropdown
    var name = value.replace(/_/g, " ");
    html += '<option name="pickOne" id="whatValue" value="' + value + '">' + capitalizeFirstLetter(name) + '</option>';
});

$("#type_holder").html(html);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var map;
var infowindow;
var autocomplete;
var selectedTypes;
var service;

$.getJSON("/data/city_info_data.json", function(data) { //If a dropdown value was choosen then add it to the autocomplete field so that it can be found on the map
    $("#city").on('click', function() {
        var val = $("#city").val();
        if (val != "") {
            $("#address").val(data[val - 1].name);
        }
    });
});

function initMap() //Load the google autocomplete widget to the address text field
{
    autocomplete = new google.maps.places.Autocomplete((document.getElementById("address")), {
        types: ["(regions)"],
    });

}

function renderMap() {

    // Get the user defined values
    var address = document.getElementById("address").value;
    var radius = 25000; //How big the search radius is when the map is loaded 




    var selectedTypes = $("#type_holder").val(); // get the selected amenity type

    var geocoder = new google.maps.Geocoder();
    var selLocLat = 0;
    var selLocLng = 0;

    geocoder.geocode({
        "address": address
    }, function(results, status) { //Search for the area inputed into the autocomplete field
        if (status === "OK") {

            selLocLat = results[0].geometry.location.lat();
            selLocLng = results[0].geometry.location.lng();

            var whereOnMap = new google.maps.LatLng(selLocLat, selLocLng);

            map = new google.maps.Map(document.getElementById("map"), { //Load the map and centre on the area selected
                center: whereOnMap,
                zoom: 11
            });

            var request = { //Find the amenities on the map
                location: whereOnMap,
                radius: radius,
                types: [selectedTypes]
            };

            infowindow = new google.maps.InfoWindow(); // Load the Infowindow widget to the map

            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
        } else {
            alert("Sorry we couldn't find your destination please try again. The error was: " + status);
        }
    });
}

function callback(results, status) //Create a list of markers for the amneity choosen 
{
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i], results[i].icon);
        }
    }
}


function createMarker(place) { //Add the Markers to the map

    service = new google.maps.places.PlacesService(map);

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    var request = {
        placeId: place.place_id
    };

    service.getDetails(request, function(details, status) {
         if (details == null) {
        marker.setMap(null);//Removes markers that do not have any information
        } 
        google.maps.event.addListener(marker, 'click', function() {//When a marker is clicked open a Infowindow to show details of the place
             if (details.rating == undefined) {
                infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address + '<br><a href=' + details.website + " target='_blank'>Visit Their Website</a><br>" + details.international_phone_number);
            } else if (details.international_phone_number == undefined) {
                infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address);
            } else {
                infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address + '<br><a href=' + details.website + " target='_blank'>Visit Their Website</a><br>" + details.international_phone_number + "<br>Rated: " + details.rating + "/5 on Google Reviews");
            }
            infowindow.open(map, this);
            console.log(details.name);
        });
    });
}