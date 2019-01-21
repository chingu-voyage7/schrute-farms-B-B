const mongoose = require('mongoose');

var ContactEnquiry = mongoose.model('ContactEnquiry', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: false,
    trim: true
  },
  phone: {
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