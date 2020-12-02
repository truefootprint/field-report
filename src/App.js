import React, { useState, useEffect } from 'react';
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
  const [login, setLogin] = useState(false);

  localStorage.removeItem("token");
  return (
      <Router>
        <Route path="/" exact render={(props) =>  <Login {...props} setLogin={setLogin} />}/>
        <ProtectedRoute exact path='/dashboard' login={login} component={Dashboard} />      
      </Router>
  );
}

export default App;
