import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patch } from 'axios';
import { setDoctor, replaceDoctor } from '../../actions';

function DoctorEdit(props) {
  const initialState = useSelector((state) => state.doctor);
  let [doctor, changeDoctor] = useState(initialState);
  const dispatch = useDispatch();

  function handleChange(event) {
    changeDoctor({ ...doctor, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!doctor.name) return
    patch(`/api/doctors/${props.match.params._id}`, { name: doctor.name })
      .then(function (response) {
        dispatch(setDoctor(doctor));
        dispatch(replaceDoctor(doctor));
      })
      .then(function () {
        props.history.push(`/doctors`)
      })
      .catch(function (error) { console.log(error); });
  };

  function handleCancel() {
    props.history.push(`/doctors`);
  }

  return (
    <div>
      <h1>Edit {doctor.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>name</label>
          <input type="text" name="name" defaultValue={doctor.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default DoctorEdit;