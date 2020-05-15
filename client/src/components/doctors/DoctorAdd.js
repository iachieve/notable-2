import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post } from 'axios';
import { addDoctor } from '../../actions';

function DoctorAdd(props) {
  const initialState = { name: '' }
  const [doctor, setFields] = useState(initialState)
  const dispatch = useDispatch();

  function handleChange(event) {
    setFields({ ...doctor, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!doctor.name) return
    post('/api/doctors', { name: doctor.name })
      .then(function (response) {
        dispatch(addDoctor(response.data));
      })
      .then(function () {
        props.history.push("/")
      })
      .catch(function (error) { console.log(error); });
  };

  function handleCancel() {
    props.history.push("/");
  }

  return (
    <div>
      <h4>Add Doctor</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type='text' name="name" required value={doctor.name}
            onChange={handleChange} className="form-control" placeholder="doctor name" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default DoctorAdd;