import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDoctors } from '../../actions'; 
import { useDispatch } from 'react-redux';


function DoctorList() {
  const doctors = useSelector(function (state) { return state.doctors });
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(setDoctors())
  }, [dispatch]);

  return (
    <div>
      <h2>
        Doctors List
        <Link to="/doctors/new" className="btn btn-primary float-right">Add Doctor</Link>
      </h2>
      {doctors.length && doctors.map(function (doctor) {
        return (
          <div key={doctor._id}>
            <hr />
            <h4><Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link></h4>
            <small>id: {doctor._id}</small>
            <Link to={{ pathname: `/doctors/${doctor._id}/edit` }} className='btn btn-outline-info'>Edit</Link>
          </div>
        );
      })}
    </div>
  )
}

export default DoctorList;