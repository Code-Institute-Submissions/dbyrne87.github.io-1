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
    $('.cityInfo').append('<img src="' + data[6].image_url + '"> <p>' + data[6].text + '</p>');
} else {
    $('#cityImage').attr('src', '');
    $('#cityText').html('');

}
 });

    }


function getCityDetails() {
    
}


