import { get } from 'axios';

export const SET_DOCTORS = 'SET_DOCTORS';
export const ADD_DOCTOR = 'ADD_DOCTOR';
export const SET_DOCTOR = 'SET_DOCTOR';
export const REPLACE_DOCTOR = 'REPLACE_DOCTOR';

export function setDoctors() {
  return function(dispatch) {
    return get('/api/doctors')
      .then(function(response) {
        dispatch({type: SET_DOCTORS, doctors: response.data})
      })
      .catch(function(error) { console.log('error', error); });
  };
};

export function addDoctor(doctor) {
  return {
    type: ADD_DOCTOR,
    doctor: doctor,
  };
};

export function setDoctor(doctor) {
  return {
    type: SET_DOCTOR,
    doctor: doctor,
  };
};

export function replaceDoctor(doctor) {
  return {
    type: REPLACE_DOCTOR,
    doctor: doctor,
  };
}