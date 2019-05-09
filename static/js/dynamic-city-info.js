 /* global $ */
var val; 
 
function writeToDocument() {
   $.getJSON("/data/country_state_city.json", function( data ) {
    // Working with JSON data below
 var val = $('#state').val();//Get the current dropdown value of #state dropdown
    if (val != "") {     //If value is not empty then add this data below to #cityInfo, if 8 add this ....and so on 
    $('#cityInfo').html('<img style="width: 100%" src="' + data[val-1].image_url + '"> </br></br> <p>' + data[val-1].text + '</p>');
    
    
} else {
    $('#cityImage').attr('src', '');
    $('#cityText').html('');

}
 });

    }


