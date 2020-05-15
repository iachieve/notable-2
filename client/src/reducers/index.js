import { combineReducers } from 'redux';
import doctors from './doctorsReducer';
import doctor from './doctorReducer';

export default combineReducers({
  doctors: doctors,
  doctor: doctor,
});