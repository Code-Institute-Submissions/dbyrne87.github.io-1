 /* global $ */
var val; 
 
function writeToDocument() {
   $.getJSON("/data/city_info_data.json", function( data ) {//Get Json Data from file 
   
    // Working with JSON data below
 var val = $('#state').val();//Get the current dropdown value of #state dropdown
    if (val != "") {     //If value is not empty then add this data below to #cityInfo, if 8 add this ....and so on 
    $('#cityInfo').html('<p class="hiddenDivInner">About ' + data[val-1].name + '</p></br><img style="width: 100%; max-width:1440px; max-height: 250px" src="' + data[val-1].image_url + '" alt="'+ data[val-1].alt_tag +'"> </br></br> <p id="border">' + data[val-1].text + '</p>');
    
    
} else {
    $('#cityImage').attr('src', '');
    $('#cityText').html('');

}
 });

    }


