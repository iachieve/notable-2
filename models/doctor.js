const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, "name is required"]
  },
  appointments: [{
     patientFirstName: {
       type: String,
      required: [true, "patientFirstName can't be blank"]
    },
    patientLastName: {
      type: String,
      required: [true, "patientLastName can't be blank"]
    },
    patientType: {
      type: String,
      required: [true, "patientType can't be blank"]
    },
    appointmentTime: {
      type: Date,
      required: [true, "appointmentTime can't be blank"]
    }
    }]
});

module.exports = mongoose.model('Doctor', doctorSchema); 