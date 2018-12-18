// These lines integrate external modules/functionality into the nodeJS file
const express = require('express');
const hbs = require('hbs');


//this sets the port variable _either_ to the host machine's pre-specified port for node application (i.e. Heroku has this configured), OR to port 3000 if no port is already specified
const port = process.env.PORT || 3000;

//initializes an express server - BOOM!
var app = express();



// This tells the express app that we were using handlebars (i.e. hbs) to render the html to the server
// there are a bunch of other rendering engines that we could use like pug (aka jade) etc.
// Rendering engines have lots of functionality (e.g. templating) that we won't be using for this app, but FYI all the same
app.set('view engine', 'hbs');

// this line tells the app where to look for static files (e.g. CSS and img files)
// '__dirname' is the same as saying, "start at the root of this project folder for all relative file-paths that I specify below"
app.use(express.static(__dirname));


// --------  Establishing the "routes" ----------- //

// route for the home page is the 'root' of the domain, i.e. '/'
app.get('/', (req,res) => {
  res.render('index.hbs');
});

app.get('/about', (req,res) => {
  res.render('about.hbs');
});

app.get('/reservations', (req,res) => {
  res.render('reservations.hbs');
});

app.get('/rooms', (req,res) => {
  res.render('rooms.hbs');
});

app.get('/amenities', (req,res) => {
  res.render('amenities.hbs');
});

app.get('/contact', (req,res) => {
  res.render('contact.hbs');
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});