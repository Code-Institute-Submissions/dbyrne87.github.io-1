
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

## UX

Firstly a set of wireframe diagrams where made to show the layout of the website on different screen sizes and was also used to iron out any potential issues that arose before coding the website.[Link To Wireframe](https://xd.adobe.com/view/72ebf153-1f38-4d5f-4294-b71ddea2af8e-04da/?fullscreen&hints=off)
<iframe width="900" height="600" src="https://xd.adobe.com/embed/72ebf153-1f38-4d5f-4294-b71ddea2af8e-04da/?fullscreen&hints=off" frameborder="10" allowfullscreen></iframe>

The websites layout is designed as simply and as user friendly as possible while allowing the user to easily navigate through the steps needed to find their next holiday destination, the user can easily finding the local amenities they would like to find through a simple dropdown.  

As the design is simple the design does not need to change dramatically through different screen sizes.  

## Features
The Landing page focuses the user to the button in the centre of the screen to start their search, which leads the user nicely through the steps and helps prevent user error during the search. 

I used Bootstrap throughout the website so that the layout is responsive no matter what the screen size. 

The Bootstrap Modal is broken into two sections, 

 1. The user can easily search from a list of 60 places by firstly choosing a continent they wish to visit. This will then dynamically load a list of cities into the second dropdown from which to choose from. If they click the submit button this will generate an image and text giving details of the area chosen. The data is received from a local Json file. 
 2. Alternatively if the user knows the city/place they are looking for then they can search for this in the Autocomplete input text field field. This will search for the place as they type and will give them suggestions so that they make sure that they are going to the correct place. 

When the user chooses a place and clicks submit information is loaded  and shown, this area is broken into 2 or 3 sections depending if the user used the dropdowns to find a place or the autocomplete input field.

If the user chose the dropdowns then 3 sections will be loaded,

 - A section with an image and text giving details of the area chosen. This info is generated from a local Json file. 
 - Weather Data, with an animated image and text (using bootstrap alert) giving the current weather, current temperature and max temperature for the area chosen. The animated image plus the colour of the alert field will change depending on the weather. The data relies heavily on the Open weather maps api. 
 - Map feature relies heavily on the Google Places Api. The map is centred on the place the user selected and shows all the local airports using icons as default. I chose Airports as the user would most likely be travelling to the area by this method and so it would be a good starting point for referencing other amenities by how far from the airport the user is flying in/out of. The user can pick from a dropdown a large list of amenities (in alphabetical order). When they refresh the map it will generate a number of icons marking the place of the amenity chosen by the user. If the user clicks on any icon it will give the user information through an infoWindow of,
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
Also used its built in features such as carousels and forms.

[Javascript](https://www.javascript.com/)
Required for Bootstrap components to run properly.

[jQuery](http://code.jquery.com/)
Required for Bootstrap components to run properly.

## Testing
As the webpages where being built I used the built in features of [Cloud9](https://aws.amazon.com/cloud9/) and Google Chrome's built in developer tools. 

I firstly tested the index.html page and stylesheet first as the information used on this page is used on the following pages. 
After each section was developed I,
1. made sure the content was responsive and laid out correctly as per the origional wireframe on desktop, tablet and mobile devices using the Chrome developer tools.
2. made sure all links are correct
3. made sure the code layout is correctly indented so it can be easily read. 

After each page was finished I used the [W3C Validator](https://validator.w3.org/), to make sure both the HTML and CSS was up to current standards and best practice. I also made sure the code layout is correct for a final time and that all links and media work correctly.

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

Icons8 is used for the tab icon in the browser
https://icons8.com/icon/52978/guitar

The band collage was made using the BeFunky Collage Generator
https://www.befunky.com/create/collage/

### Media
Youtube Videos used for the Our Music iframe's
https://www.youtube.com/

The Audio files used are from Code Institute's Github repository
https://github.com/Code-Institute-Org/project-assets/tree/master/stream-1/band-assets/audio

UnSplash for the high resolution images.
(https://unsplash.com/)

### Acknowledgements

Used W3C to check my HTML and CSS is correct and up to standard.
[W3C Validator](https://validator.w3.org/)

Stackoverflow for helping solve coding problems I had
https://stackoverflow.com/

w3schools for explaining code in easy to understand snippets
https://www.w3schools.com/