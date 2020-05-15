import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Doctors from './components/doctors/DoctorsList';
import DoctorAdd from './components/doctors/DoctorAdd';
import DoctorEdit from './components/doctors/DoctorEdit';
import AppointmentsManagement from './components/appointments/physicians';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link"
            activeClassName="active" to="/doctors">Doctors</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link"
            activeClassName="active" to="/AppointmentsManagement">Appointments</NavLink></li>

        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/doctors" component={Doctors} />
      <Route exact path="/doctors/new" component={DoctorAdd} />
      <Route exact path="/doctors/:_id/edit" component={DoctorEdit} />
      <Route exact path="/AppointmentsManagement" component={AppointmentsManagement} />
    </Switch>
  );
}

export default App;