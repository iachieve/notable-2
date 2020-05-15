import { SET_DOCTORS, ADD_DOCTOR, REPLACE_DOCTOR } from '../actions';

const initialState = { doctors: [] }
export default function doctorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DOCTORS:
      return action.doctors;
    case ADD_DOCTOR:
      return [action.doctor, ...state];
    case REPLACE_DOCTOR:
      return state.map(function(doctor) {
        if (doctor._id === action.doctor._id) {
          return {
            ...doctor,
            name: action.doctor.name,
          }
        } else return doctor;
      })
    default:
      return state;
  }
}