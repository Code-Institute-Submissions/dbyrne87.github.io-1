
# Code Institute Milestone Project - 2
## [TripFinder.com](https://dbyrne87.github.io/)
![Screenshot of website homepage](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-wireframe.jpg?raw=true)
A simple website designed to allow users to easily search for their next holiday destination.
This website can be used to find the following,
1.  Select a destination city
2.  Find tourist attractions
3.  Find accommodation
4.  Find bars and restaurants
5.  A selection of other amenities

The websites layout was based around the primary targets in the brief while keeping the design as simple as possible.

### User Stories

- I don't know where I want to go on holidays. I want a list of the best places to choose from.
- I know exactly where I want to go on holidays what is their to see and do.  
- I want to find nearby hotels close to the centre of town / near the airport / near a type of amenity
-  Where can I go to visit on my stay, whats the address / does it have a website / whats their phone number.
-  Where can I go to eat or drink on my stay, whats the address / does it have a website / whats their phone number.
-   Where's the nearest Trainstation / Bus Stop / Airport near my hotel.
- I want to plan on what to do and what to visit before I go
- I want to plan on what clothes to bring with me, whats the weather like
## UX

Firstly a set of wireframe diagrams where made to show the layout of the website on different screen sizes and was also used to iron out any potential issues that arose before coding the website.[Link To Wireframe](https://xd.adobe.com/view/72ebf153-1f38-4d5f-4294-b71ddea2af8e-04da/?fullscreen&hints=off)

The websites layout is designed as simply and as user friendly as possible while allowing the user to easily navigate through the steps needed to find their next holiday destination, the user can easily finding the local amenities they would like to find through a simple dropdown.  

As the design is simple the design does not need to change dramatically through different screen sizes.  

## Features
![Website Landing Page](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-wireframe.jpg?raw=true)
The Landing page focuses the user to the button in the centre of the screen to start their search, which leads the user nicely through the steps and helps prevent user error during the search. 

I used Bootstrap throughout the website so that the layout is responsive no matter what the screen size. 

Social media links in the Navbar allows all users, to see the websites social media accounts and keep up to date on new features, promoted places etc.  *no social media accounts are setup for this website at present and are for display only.
![Bootstrap Modal with autocomplete](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-Modal.jpg?raw=true)
The Bootstrap Modal is broken into two sections, 

 1. The user can easily search from a list of 60 places by firstly choosing a continent they wish to visit. This will then dynamically load a list of cities into the second dropdown from which to choose from. If they click the submit button this will generate an image and text giving details of the area chosen. The data is received from a local Json file. 
 2. Alternatively if the user knows the city/place they are looking for then they can search for this in the Autocomplete input text field field. This will search for the place as they type and will give them suggestions so that they make sure that they are going to the correct place. 

When the user chooses a place and clicks submit information is loaded  and shown, this area is broken into 2 or 3 sections depending if the user used the dropdowns to find a place (3 Sections) or the autocomplete input field (2 Sections, the top info section is not shown).

The 3 sections are broken down into the following,
 ![Image and text about area](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-About.jpg?raw=true)   
 - A section with an image and text giving details of the area chosen. This info is generated from a local Json file. 
 ![Weather data and image](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-Weather.jpg?raw=true)
 - Weather Data, with an animated image and text (using bootstrap alert) giving the current weather, current temperature and max temperature for the area chosen. The animated image plus the colour of the alert field will change depending on the weather. The data relies heavily on the Open weather maps api. 
![Google Maps feature showing the amenity dropdown](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-Amenity.jpg?raw=true)
 - Map feature relies heavily on the Google Places Api. The map is centred on the place the user selected and shows all the local airports using icons as default. I chose Airports as the user would most likely be travelling to the area by this method and so it would be a good starting point for referencing other amenities by how far from the airport the user is flying in/out of. The user can pick from a dropdown a large list of amenities (in alphabetical order). When they refresh the map it will generate a number of icons marking the place of the amenity chosen by the user. 
![Infowindow Screenshot](https://github.com/dbyrne87/dbyrne87.github.io/blob/master/static/assets/images/Screenshot-Infowindow.jpg?raw=true)
If the user clicks on any icon it will give the user information through an infoWindow of,
 - The Place Name
 - Address
 - Website Link
 - Phone Number
 - Google User Rating

The above information relies heavily on information received from the Google Places API again.
If certain or no information is not available through the Api then the infoWindow will leave the field empty.   
##  Future Development
In a future version I would like to,

 - Connect to the tripadvisor.com Api to allow a large amount of data to be available to the user and that will be updated constantly automatically so the site will not rely on static Json data files.
 - Upgrade the Open Weather Maps Api so that more information is available such as weekly forecasts, hour by hour forecast and historical data. 
 - Add a planner application to allow the user plan their trip and easily add points of interest from the map or add notes which can then be emailed to them so it can be used on their journey. 
 - Add the Google Directions Api functionality to the map and to the planner so that the user can get an all in one application for planning their journey.

## Technologies Used
HTML5 & CSS3
Used for displaying the content and layout.

[Bootstrap](https://getbootstrap.com/)
Used to make the website clean and responsive.
Also used its built in features such as Modal and Alert fields.

[Javascript](https://www.javascript.com/)
Required for the functionality of the website in conjunction with jQuery .

[jQuery](http://code.jquery.com/)
Required for the functionality of the website .

[Google Maps JavaScript & Google Places Api](https://developers.google.com/maps/documentation/javascript/tutorial)
The website relies heavily on these to generate the map, icons in the map and generate data for the infoWindow and finding the places in the autocomplete text field.
[Font Awesome](https://fontawesome.com/)
 To provide icons for the social media links and Website icon.
[Google Fonts](https://fonts.google.com/)
 The website uses the "Comfortaa" font throughout.  

## Testing
As the webpages where being built I used the built in features of [Cloud9](https://aws.amazon.com/cloud9/) and Google Chrome's built in developer tools. 

I firstly tested the index.html page and stylesheet,
After each section was developed I,
1. made sure the content was responsive and laid out correctly as per the original wireframe on desktop, tablet and mobile devices using the Chrome developer tools.
2. made sure the code layout is correctly indented so it can be easily read. 
3. I used the [W3C Validator](https://validator.w3.org/), to make sure both the HTML and CSS was up to current standards and best practice. 

User scenarios:

 1. Land on the page,
		Do you know what the website is for.
		Is the page clear and user friendly. 
		Do you know what to do where to go?		 
 
 2.  Modal,
		 Is it clear between the two options available what both are for and how they are different
		Does the dropdown work.
		Does the autocomplete feature work. 
		Is it clear that you must click the button to proceed to the next step. 
		
 3. Hidden Div Appears
		 If an area was choosen from the dropdown does it match what is shown in the new display.
		 Is the weather for the correct area. 
		 Is the map in the correct area.
		 Does it have icons loaded to the map.
		 Does the map update the icons when a new amenity is chosen. 
		 Does the icons show data when clicked.
		 
 4. Searching again
		Is it easy and clear to start a new search for a new area
		If the dropdowns where chosen does it update the information
		Does the weather update to the new place
		Does the map update to the new place 


-   I tested the website on Chrome, Microsoft Edge and Firefox. I haven't found any issues so far.

#### Real User Testing

When I felt the website was finished,
I asked friends and family to use the website and to give me feedback on issues they found or suggestions they had.

A few mentioned that the weather data didn't work for certain cities such as Dubai or London.  On investigation it was because the autocomplete was adding commas or hyphens in the autocomplete and so the OpenWeatherMap could not read these. I added some code to only use the text before these which solved this issue. 



## Deployment

This website is hosted and deployed on GitHub Pages.
The website can be viewed [Here](https://dbyrne87.github.io/)

##### How to deploy website on Github Pages.

   * Click on name of repository that you want to deployed.

   * On the top bar click on "Settings".

   * Scroll down to GitHub Pages and from source drop down list choose "Master branch".

   * Create the name for your deployed website and click on "Save" button.


## Credits

### Content

Google fonts was used throughout the website
https://fonts.google.com/

Google Maps Api
https://cloud.google.com/maps-platform/

Open Weather Map Api
https://openweathermap.org/

Used this code to add the weather icon animation to the site
https://codepen.io/front-end-developer/pen/vREwzJ

I used the images from tripadvisor and some of the about text to fill out the About Section
https://www.tripadvisor.ie/



### Media

UnSplash for the high resolution images.
(https://unsplash.com/)

### Acknowledgements

Used W3C to check my HTML and CSS is correct and up to standard.
[W3C Validator](https://validator.w3.org/)

Used the code from this codepen for the map functionality which I then modified to suit my needs 
https://codepen.io/front-end-developer/pen/vggovw

Stackoverflow for helping solve coding problems I had
https://stackoverflow.com/

w3schools for explaining code in easy to understand snippets
https://www.w3schools.com/