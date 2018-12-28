const mongoose = require('mongoose');

var ContactEnquiry = mongoose.model('ContactEnquiry', {
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
  message: {
    type: String,
    required: true
  }
});

module.exports = {ContactEnquiry};