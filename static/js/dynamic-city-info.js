var fetch;

function writeToDocument(cb) {
   fetch('/data/country_state_city.json')
  .then(response => {
    return response.json() //Get the Json data
  })
  .then(data => {
    // Working with JSON data below
 var val = $('#state').val(); //Get the current dropdown value of #state dropdown
    if (val == 7) { //If the value is 7 then add this data below to #cityInfo, if 8 add this ....and so on 
    $('#cityInfo').html('<img style="width: 100%" src="' + data[6].image_url + '"> </br></br> <p>' + data[6].text + '</p>');
} else {
    $('#cityImage').attr('src', '');
    $('#cityText').html('');

}
 });

    }





