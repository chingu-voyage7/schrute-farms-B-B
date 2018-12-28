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
    required: false,
    minlength: 3,
    trim: true
  }
});

module.exports = {ResRequest};