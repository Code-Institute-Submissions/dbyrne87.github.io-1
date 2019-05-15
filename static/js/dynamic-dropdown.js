 /* global $ */
$(document).ready(function(){

 load_json_data('country');

 function load_json_data(id, parent_id) {
  
  var html_code = '';
  
  $.getJSON('/data/city_info_data.json', function(data){ //Get Json data from file

   html_code += '<option value="">Select '+id+'</option>';
   
   $.each(data, function(key, value){
    if(id == 'country') {
     
     if(value.parent_id == '0') {// If the item has a parent ID of 0 then it is a Continent 
     
      html_code += '<option value="'+value.id+'">'+value.name+'</option>'; // Append Continents to html_code
     }
    }
    else
    {
     if(value.parent_id == parent_id) {// If the parent ID's are already loaded 
     
      html_code += '<option value="'+value.id+'">'+value.name+'</option>'; // Append Continents to html_code
     }
    }
   });
   
   $('#'+id).html(html_code); //Load the data to the field
   
  });

 }

 $(document).on('change', '#country', function(){ // Listen to a click in the #Country dropdown
  var country_id = $(this).val(); //What was clicked
  if(country_id != '')
  {
   load_json_data('state', country_id); //Load the data that has the same parent_id value
  }
  else
  {
   $('#state').html('<option value="">Select state</option>'); //If nothing is clicked or an error this is the default values for both fields
   $('#city').html('<option value="">Select city</option>');
  }
 });
});

function displayDiv() { //The fade in effect for the hidden div
   $(".hiddenDiv").fadeIn( 2000, function() {
    $(".hiddenDiv").css("display", "block");
   }); 
}

