/* global $ */
    //All the types of amenities that can be searched for in the map
    var types = ["airport","amusement_park","aquarium","art_gallery","atm","bank","bar","bowling_alley","bus_station","cafe","campground","car_rental","casino","church","embassy","gas_station","gym","hair_care","hindu_temple","hospital","lodging","meal_takeaway","mosque","movie_theater","museum","night_club","park","parking","pharmacy","restaurant","shopping_mall","spa","stadium","subway_station","synagogue","taxi_stand","train_station","transit_station","zoo"];
    var html;
    
    $.each(types, function( index, value ) { //Get each value from Types and make them more readable to the user add them to #typeholder dropdown
        var name = value.replace(/_/g, " ");
        html += '<option name="pickOne" id="whatValue" value="'+ value +'">'+ capitalizeFirstLetter(name) + '</option>';
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

$.getJSON("/data/city_info_data.json", function( data ) { //If a dropdown value was choosen then add it to the autocomplete field so that it can be found on the map
$("#state").on('click', function(){
    var val = $("#state").val();
    if (val != "") {
        $("#address").val(data[val-1].name);
        }
    });
});

function initMap() //Load the google autocomplete widget to the address text field
{
    autocomplete = new google.maps.places.Autocomplete((document.getElementById("address")), {
        types: ["(regions)"],
    });

}

function renderMap()
{
    
    // Get the user defined values
    var address = document.getElementById("address").value;
    var radius  = 25000; //How big the search radius is when the map is loaded 
    
    
    
    
    
    var selectedTypes = $("#type_holder").val(); // get the selected amenity type

    var geocoder    = new google.maps.Geocoder(); 
    var selLocLat   = 0;
    var selLocLng   = 0;

    geocoder.geocode({"address": address}, function(results, status) { //Search for the area inputed into the autocomplete field
        if (status === "OK")
        {

            selLocLat   = results[0].geometry.location.lat();
            selLocLng   = results[0].geometry.location.lng();

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
        }
        else
        {
            alert("Sorry we couldn't find your destination please try again. The error was: " + status);
        }
    });
}

function callback(results, status) //Create a list of markers for the amneity choosen 
{
    if (status == google.maps.places.PlacesServiceStatus.OK)
    {
        for (var i = 0; i < results.length; i++)
        {
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

var request = { placeId: place.place_id };

service.getDetails(request, function(details, status) { //When a marker is clicked open a Infowindow to show details of the place 
  google.maps.event.addListener(marker, 'click', function() {
      if (details == null ){
            infowindow.setContent('<p id="infoWindowHeader">Sorry No Place data available for this waypoint, Please try another one</p>');  
      } else if (details.rating == undefined ){ 
          infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address +'<br><a href=' + details.website + " target='_blank'>Visit Their Website</a><br>" + details.international_phone_number);
      } else if (details.international_phone_number == undefined ){ 
          infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address);
       } else {
          infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address +'<br><a href=' + details.website + " target='_blank'>Visit Their Website</a><br>" + details.international_phone_number + "<br>Rated: " + details.rating + "/5 on Google Reviews");
      }
    infowindow.open(map, this);
    console.log(details.name);
   });
 });
}