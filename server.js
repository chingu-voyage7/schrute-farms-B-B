// These lines integrate external modules/functionality into the nodeJS file
const express = require('express');
const hbs = require('hbs');
//with body-parser, we can send json data to our application
const bodyParser = require('body-parser');

// import mongoose setup code
const {mongoose} = require('./server/db/mongoose');
//import ResRequest mongoose model
const {ResRequest} = require('./server/models/resRequests');
//import ContactEnquiry mongoose model
const {ContactEnquiry} = require('./server/models/Enquiries');

// Require dateCheck
const dateCheck = require('./dateCheck');


//initializes an express server - BOOM!
var app = express();

//this sets the port variable _either_ to the host machine's pre-specified port for node application (i.e. Heroku has this configured), OR to port 3000 if no port is already specified
const port = process.env.PORT || 3000;


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

app.get('/dev', (req,res) => {
  res.render('dev.hbs');
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});


// Set up MongoDB Routes

//configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route to POST enquiries
app.post('/enquiries', (req, res) => {
  // console.log(req.body);
  var enquiry = new ContactEnquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });

  enquiry.save().then( (doc)=> {
    res.status(200).send("Item saved to database");
  }, (e) => {
    res.status(400).send(e);
  });

});

// List all reservation requests
app.get('/enquiries', (req, res) => {
  ContactEnquiry.find().then( (enquiries) => {
    
    res.send({enquiries});  //sent as an object b/c you can add custom properties on later (vs. sending as an object)\

  }, (e) => {
    res.status(400).send(e);
  });

});

//route to POST to request

app.post('/requests', (req, res) => {
  // console.log(req.body);
  
  var reservation = new ResRequest({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    agree: req.body.agree,
    arrivalDate: req.body.arrivalDate,
    departureDate: req.body.departureDate,
    numAdults: req.body.numAdults,
    numChildren: req.body.numChildren,
    numRooms: req.body.numRooms,
    room: req.body.room,
    flexibility: req.body.flexibility,
    message: req.body.message
  });

  // The dateStatus variable holds a boolean.  'true' if dates are valid and 'false' if the dates are invalid
  var dateStatus = dateCheck.checkDates(reservation.arrivalDate,reservation.departureDate);

  if (dateStatus === false) {
    return res.status(400).send('date error');  //change to provide error message to user re: dates and ask to re-enter
  }

  reservation.save().then( (doc)=> {
    res.status(200).send("Item saved to database");
  }, (e) => {
    res.status(400).send(e);
  });

});

// List all reservation requests
app.get('/requests', (req, res) => {
  ResRequest.find().then( (requests) => {

    res.send({requests});  //sent as an object b/c you can add custom properties on later (vs. sending as an object)\

  }, (e) => {
    res.status(400).send(e);
  });

});

// understand this!!
module.exports = {app};