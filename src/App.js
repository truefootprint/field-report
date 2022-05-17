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
import { AppContext } from './context';

function App() {
  const [login, setLogin] = useState(false);
  const [ userInterfaceText, setUserInterfaceText ] = useState([]);

  //localStorage.removeItem("token");
  //localStorage.setItem("locale", "en");
  return (
    <AppContext.Provider value={{ userInterfaceText, setUserInterfaceText }}>
      <Router>
        <Route path="/" exact render={(props) =>  <Login {...props} setLogin={setLogin} />}/>
        <ProtectedRoute exact path='/dashboard' setLogin={setLogin} login={login} component={Dashboard} />      
      </Router>
    </AppContext.Provider>
  );
}

export default App;
