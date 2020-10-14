import React, { useState, useEffect } from 'react';
import axios from 'axios';

let host;
//host = "https://field-backend.truefootprint.com";
host = "http://localhost:3000";

function Login(props) {
  const [token, setToken] = useState("");
  
  function handleChange(event) {
    setToken(btoa(`user:${event.target.value}`)); 
  }

  function handleSubmit(event){
      console.log("WE ARE HERE");
      console.log(token);
      axios
      .get(`${host}/reports/setup_report_form`, {
        headers: {
          'Authorization': `Basic ${token}`
        }
      })
      .then((res) => {
        console.warn("AFTER TOKEN")
        console.warn(res)
        console.log(res.status === 200)
        console.log(token)
        if (res.status === 200) {
          localStorage.setItem("token", token);
          props.history.push("/dashboard")
        }
        //setProgrammes(res.data.programmes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <div className="user">
                      <div className="form-group">
                        <input className="form-control form-control-user" id="exampleInputEmail" placeholder="Enter Email Address..." />
                      </div>
                      <div className="form-group">
                        <input type="password" onChange={handleChange} className="form-control form-control-user" placeholder="Password" />
                      </div>
                      <div className="form-group">
                      </div>
                      <button onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                      <hr />
                    </div>
                    <hr />
                    {/* <div className="text-center">
                      <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">Create an Account!</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}

export default Login;



