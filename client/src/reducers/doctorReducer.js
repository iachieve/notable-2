import { SET_DOCTOR } from '../actions';

export default function doctorReducer(state = {}, action) { 
  switch (action.type) {
    case SET_DOCTOR: 
      return action.doctor;
    default:
      return state;
  }
};