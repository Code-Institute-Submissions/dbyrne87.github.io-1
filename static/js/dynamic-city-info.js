var fetch;

function writeToDocument(cb) {
   fetch('/data/country_state_city.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
 var val = $('#state').val();
    if (val == 7) {
    $('#cityInfo').html('<img style="width: 100%" src="' + data[6].image_url + '"> </br></br> <p>' + data[6].text + '</p>');
} else {
    $('#cityImage').attr('src', '');
    $('#cityText').html('');

}
 });

    }





