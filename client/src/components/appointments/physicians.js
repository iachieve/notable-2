import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setDoctors } from '../../actions';
import { useDispatch } from 'react-redux';
import { post } from 'axios';
import { setDoctor, replaceDoctor } from '../../actions';
import moment from 'moment';
function Physicians() {

  const doctors = useSelector(function (state) { return state.doctors });
  const doctor = useSelector(function (state) { return state.doctor });

  const [appointments, setAppointments] = useState('');

  const dispatch = useDispatch();

  useEffect(() => { dispatch(setDoctors()) }, [dispatch]);

  const [appointment, setNewAppointment] = useState({
    patientFirstName: '',
    patientLastName: '',
    patientType: 'New Patient',
    appointmentTime: Date.now()
  });

  function addNewAppointment(event) {
    event.preventDefault();
    post(`/api/doctors/${doctor._id}/addAppointment`, {
      patientFirstName: appointment.patientFirstName,
      patientLastName: appointment.patientLastName,
      patientType: appointment.patientType,
      appointmentTime: appointment.appointmentTime
    }).then(function (response) {
      dispatch(replaceDoctor(response.data));
    })
      .catch(function (error) { console.log(error); });

    console.log(appointment.patientFirstName, appointment.patientLastName, appointment.patientType, appointment.appointmentTime);
  }

  function handleChange(event) {
    setNewAppointment({ ...appointment, [event.target.name]: event.target.value });
    console.log(appointment);
  }


  return (
    <div className='row'>
      <div className='col-2'>
        <h2>notable</h2>
        <h4>PHYSICIANS </h4>
        <br></br>
        {doctors.length && doctors.map(function (doctor) {
          return (
            <div key={doctor._id}>
              <hr />
              <h4 onClick={() => dispatch(setDoctor(doctor))}>{doctor.name}</h4>
            </div>
          );
        })}
      </div>

      <div className='col-10'>
        {
          doctor.appointments && doctor.appointments.map(function (app) {
            return (
              <div key={app._id} className='row'>
                <div className='col-4'>{app.patientFirstName} {app.patientLastName}</div>
                <div className='col-4'>{app.patientType}</div>
                <div className='col-4'>{moment(app.appointmentTime).format('LT')}</div>
              </div>
            );
          })}

        <div className='row'>
          <div>
            <input name='patientFirstName' placeholder='patient first name' value={appointment.patientFirstName} onChange={handleChange} />
            <input name='patientLastName' placeholder='patient last name' value={appointment.patientLastName} onChange={handleChange} />
          </div>
          <div>
            <select name="patientType" value={appointment.patientType} onChange={handleChange} >
              <option value="New Patient">New Patient</option>
              <option value="Follow up">Follow up</option>
            </select>
          </div>
          <div>
            <input type="datetime-local" name="appointmentTime" value={appointment.appointmentTime} required onChange={handleChange} />
          </div>
          <div>
            <button onClick={addNewAppointment}>+</button>
          </div>
        </div>

      </div>





    </div>
  )
}

export default Physicians;