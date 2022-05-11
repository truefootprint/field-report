import React, { useState, useEffect, useCallback } from "react";
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import logo from './logo.svg';
import Login from "./components/login"
import * as Rbs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sb-admin-2.css';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/login/protected_route';

function App() {
  const [login, setLogin] = useState(false);

  localStorage.removeItem("token");
  return (
      <Router>
        <Route path="/" exact render={(props) =>  <Login {...props} setLogin={setLogin} />}/>
        <ProtectedRoute exact path='/dashboard' setLogin={setLogin} login={login} component={Dashboard} />      
      </Router>
  );
}

export default App;
