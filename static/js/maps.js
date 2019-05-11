 /* global $ */
$(document).ready(function(){
    //All the types of amenities that can be searched for in the map
    var types = ['airport','amusement_park','aquarium','art_gallery','atm','bank','bar','bowling_alley','bus_station','cafe','campground','car_rental','casino','church','embassy','gas_station','gym','hair_care','hindu_temple','hospital','lodging','meal_takeaway','mosque','movie_theater','museum','night_club','park','parking','pharmacy','restaurant','shopping_mall','spa','stadium','subway_station','synagogue','taxi_stand','train_station','transit_station','zoo'];
    var html = '';
    
    $.each(types, function( index, value ) {
        var name = value.replace(/_/g, " ");
        html += '<option name="pickOne" id="whatValue" value="'+ value +'">'+ capitalizeFirstLetter(name) + '</option>';
    });
    

    $('#type_holder').html(html);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var map;
var infowindow;
var autocomplete;
var selectedTypes;
var service;

$.getJSON("/data/country_state_city.json", function( data ) {
$("#state").on('click', function(){
    var val = $('#state').val();
    if (val != "") {
        $('#address').val(data[val-1].name);
        }
});
});

function initMap()
{
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('address')), {
        types: ['(regions)'],
    });

}

function renderMap()
{
    
    // Get the user defined values
    var address = document.getElementById('address').value;
    var radius  = 25000;
    
    
    
    // get the selected type
    
    var selectedTypes = $('#type_holder').val();

    var geocoder    = new google.maps.Geocoder();
    var selLocLat   = 0;
    var selLocLng   = 0;

    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK')
        {
            //console.log(results[0].geometry.location.lat() + ' - ' + results[0].geometry.location.lng());

            selLocLat   = results[0].geometry.location.lat();
            selLocLng   = results[0].geometry.location.lng();

            //var pyrmont = new google.maps.LatLng(52.5666644, 4.7333304);

            var pyrmont = new google.maps.LatLng(selLocLat, selLocLng);

            map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 11
            });

            //console.log(selectedTypes);

            var request = {
                location: pyrmont,
                radius: radius,
                types: [selectedTypes]
            };

            infowindow = new google.maps.InfoWindow();

            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
        }
        else
        {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function callback(results, status)
{
    if (status == google.maps.places.PlacesServiceStatus.OK)
    {
        for (var i = 0; i < results.length; i++)
        {
            createMarker(results[i], results[i].icon);
        }
    }
}


function createMarker(place) {
    
service = new google.maps.places.PlacesService(map);
    
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
 });

var request = { placeId: place.place_id };

service.getDetails(request, function(details, status) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<p id="infoWindowHeader">' + details.name + '</p>' + details.formatted_address +'<br><a href=' + details.website + " target='_blank'>Visit Their Website</a><br>" + details.international_phone_number + "<br>Rated: " + details.rating + "/5 on Google Reviews");
    infowindow.open(map, this);
    console.log(details);
   });
 });
}
