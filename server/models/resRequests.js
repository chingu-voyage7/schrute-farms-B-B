//load in the mongoose library (NOT the file we created)
const mongoose = require('mongoose');

// create a model for reservation requests

var ResRequest = mongoose.model('ResRequest', {
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  state: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  zip: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  agree: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  numAdults: {
    type: Number,
    required: true
  },
  numChildren: {
    type: Number
  },
  numRooms: {
    type: Number
  },
  room: {
    type: String
  },
  flexibility: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = {ResRequest};