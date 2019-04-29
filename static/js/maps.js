var autocomplete;
var map;
var markers = [];
var infoWindow;
var places;
var getDropdownValue;

// Initialise map
function initMap() {
    var pyrmont = new google.maps.LatLng(52.5666644, 4.7333304);

        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 12,
        // Allow user to zoom in and out, switch to satellite mode and view streetview images
        mapTypeControl: true,
        zoomControl: true,
        streetViewControl: true
    });
 var pyrmont = new google.maps.LatLng(52.5666644, 4.7333304);

        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 12
        });
    // Info window with place details
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-details')
    });


    // Autocomplete
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'));
        places = new google.maps.places.PlacesService(map);
        autocomplete.addListener('place_changed', onPlaceChanged);// Resets map to new area that has been searched
        document.getElementById('type-accommodation').addEventListener('change', onPlaceChanged);
        document.getElementById('type-food').addEventListener('change', onPlaceChanged);
        document.getElementById('type-poi').addEventListener('change', onPlaceChanged);
        document.getElementById('type-atm').addEventListener('change', onPlaceChanged);
        document.getElementById('type-stores').addEventListener('change', onPlaceChanged);
        document.getElementById('type-drink').addEventListener('change', onPlaceChanged);
        document.getElementById('type-nightclub').addEventListener('change', onPlaceChanged);
        document.getElementById('type-casino').addEventListener('change', onPlaceChanged);
        document.getElementById('type-bowling-alley').addEventListener('change', onPlaceChanged);
        document.getElementById('type-shopping-mall').addEventListener('change', onPlaceChanged);
        document.getElementById('type-park').addEventListener('change', onPlaceChanged);
        document.getElementById('type-amusement-park').addEventListener('change', onPlaceChanged);
        document.getElementById('type-museum').addEventListener('change', onPlaceChanged);
        document.getElementById('type-aquarium').addEventListener('change', onPlaceChanged);
        document.getElementById('type-zoo').addEventListener('change', onPlaceChanged);
        document.getElementById('type-train-station').addEventListener('change', onPlaceChanged);
        document.getElementById('type-taxi-stand').addEventListener('change', onPlaceChanged);
        document.getElementById('type-transit-station').addEventListener('change', onPlaceChanged);
        document.getElementById('type-subway-station').addEventListener('change', onPlaceChanged);
}

$("#state").on('click', function(){
    var val = $(this).val();
    var cityText = $('#currentSelection').val();
    if (val == 7) {
        $('#autocomplete').val("Nairobi, Kenya");
        
    } else {
        console.log(val);
    }
});

// Select autocomplete query - return details of place and zoom into area
function onPlaceChanged() {
    var radio = $('input[name=filter]:checked');
    var radioId = radio.attr('id');
    
    if (radioId == "type-accommodation") {        
        var place = autocomplete.getPlace();                //getPlace() retrieves place name for autocomplete query
        if (place.geometry) {
            map.panTo(place.geometry.location);             //Retrieves lng/lat of place
            map.setZoom(15);
            searchAccommodation();
        }
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }
    else if (radioId == "type-food") {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchFoodAndDrink();
        }
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }
    else if (radioId == "type-poi") {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchPointOfInterest();
        }
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }
}

// Search for accommodation
function searchAccommodation() {
    var search = {
        bounds: map.getBounds(),                //getBounds() retrieves lng/lat for corners of visible area of map
        types: ['lodging', 'campground']
    };
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {         //If Places Service is working, create marker
            clearResult();
            clearMarker();
            // Create marker
            for (var x = 0; x < results.length; x++) {
                markers[x] = new google.maps.Marker({
                    position: results[x].geometry.location                  //Positions marker to searched location
                });
                // When user clicks accommodation marker, show details
                markers[x].placeResult = results[x];
                google.maps.event.addListener(markers[x], 'click', showInfoWindow);
                setTimeout(dropMarkers(x), x * 100);
            }
        }
    });
}

// Search for food and drink
function searchFoodAndDrink() {
    var search = {
        bounds: map.getBounds(),
        types: ['restaurant', 'bar']
    };
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResult();
            clearMarker();
            // Create marker
            for (var x = 0; x < results.length; x++) {
                markers[x] = new google.maps.Marker({
                    position: results[x].geometry.location
                });
                // When user clicks food and drink marker, show details
                markers[x].placeResult = results[x];
                google.maps.event.addListener(markers[x], 'click', showInfoWindow);
                setTimeout(dropMarkers(x), x * 100);
            }
        }
    });
}

// Search for points of interest
function searchPointOfInterest() {
    var search = {
        bounds: map.getBounds(),
        types: ['shopping_mall', 'night_club', 'museum', 'art_gallery', 'park', 'amusement_park']
    };
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResult();
            clearMarker();
            // Create marker
            for (var x = 0; x < results.length; x++) {
                markers[x] = new google.maps.Marker({
                    position: results[x].geometry.location
                });
                // When user clicks point of interest marker, show details
                markers[x].placeResult = results[x];
                google.maps.event.addListener(markers[x], 'click', showInfoWindow);
                setTimeout(dropMarkers(x), x * 100);
            }
        }
    });
}

// Clear markers when new radio option selected
function clearMarker() {
    for (var x = 0; x < markers.length; x++) {
        if (markers[x]) {
            markers[x].setMap(null);
        }
    }
    markers = [];
}

// Add found results to map
function dropMarkers(x) {
    return function() {
        markers[x].setMap(map);
    };
}

function clearResult() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

// Fetch place details
function showInfoWindow() {
    var marker = this;
    places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            setPlaceDetails(place);
        });
}

// Show place details in info window on map
function setPlaceDetails(place) {
    document.getElementById('url').innerHTML = '<a href="' + place.url + 'target="_blank">' + place.name + '</a>';
    document.getElementById('address').textContent = place.vicinity;
    document.getElementById('phone').textContent = place.formatted_phone_number;
}