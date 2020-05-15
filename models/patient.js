const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name is required"]
  },
  lastName: {
    type: String,
    required: [true, "last name is required"]
  }
});

module.exports = mongoose.model('Patient', patientSchema); 