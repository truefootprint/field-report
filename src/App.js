import React from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js"
import * as Rbs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './all.min.css';
import './sb-admin-2.css';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/protected_route';

function App() {
  return (
      <Router>

      {/* <Login />
      <Dashboard /> */}
      <Route path="/" exact component={Login}/>
      <Route path="/field-report" exact component={Login}/>
      {/* <Route path="/dashboard" component={Dashboard}/> */}
      <ProtectedRoute exact path='/dashboard' token={localStorage.getItem("token")} component={Dashboard} />
      </Router>
  );
}

export default App;
