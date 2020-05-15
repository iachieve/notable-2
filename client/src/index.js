import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import rootReducer from './reducers';
import { setDoctors } from './actions'; 
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(setDoctors()); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);