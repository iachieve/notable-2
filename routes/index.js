const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

router.get('/doctors', function (req, res) {
  Doctor.find(function (err, doctors) {
    res.json(doctors);
  });
});

router.get('/doctors/:id', function (req, res) {
  Doctor.findById(req.params.id, function (err, doctor) {
    if (!doctor) {
      res.status(404).send('No result found');
    } else {
      res.json(doctor);
    }
  });
});

router.post('/doctors', function (req, res) {
  let doctor = new Doctor(req.body);
  doctor.save()
    .then(doctor => {
      res.send(doctor);
    })
    .catch(function (err) {
      res.status(422).send('Doctor add failed');
    });
});

router.patch('/doctors/:id', function (req, res) {
  Doctor.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json('Doctor updated');
    })
    .catch(function (err) {
      res.status(422).send("Doctor update failed.");
    });
});

router.delete('/doctors/:id', function (req, res) {
  Doctor.findById(req.params.id, function (err, doctor) {
    if (!doctor) {
      res.status(404).send('Doctor not found');
    } else {
      Doctor.findByIdAndRemove(req.params.id)
        .then(function () { res.status(200).json("Doctor deleted") })
        .catch(function (err) {
          res.status(400).send("Doctor delete failed.");
        })
    }
  });
});

router.post('/doctors/:id/addAppointment', async (req, res)=> {
  console.log('=========> here');
  console.log('=========> here', req.body);
  console.log('=========> here', req.params.id);
  let doctor = await Doctor.findById(req.params.id);
 
  if (!doctor) {
    res.status(404).send('Doctor not found');
  } else {
    doctor.appointments.push(req.body);
    doctor.save().then(doctor => {
      res.send(doctor);
    })
      .catch(function (err) {
        console.log(err);
        res.status(422).send('Appointment add failed');
      });
  }
});


module.exports = router;