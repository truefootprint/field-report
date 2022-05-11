import React from 'react';
import Chart from "../chart"
import * as Rbs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sb-admin-2.css';
import logo from '../../TF-White.svg';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  let history = useHistory();
  function handleLogout(event){
    localStorage.removeItem("token");
    props.setLogin(false);
    history.push("/");
  }

  return (
  <div id="wrapper">
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
      <div className="sidebar-brand-icon">
        <img src={logo} alt="Logo" />       
      </div>
      <div className="sidebar-brand-text mx-3">
      
       
      </div>
      
    {/* <hr className="sidebar-divider my-0" /> */}
    <li className="nav-item">
      <a className="nav-link" href="#">
        <h5 style={{ paddingLeft: "25px" }}>
          Report Viewer
        </h5>
        <small style={{ paddingLeft: "75px" }}>(Beta)</small>
      </a>
    </li>
    <hr className="sidebar-divider" />
    <hr className="sidebar-divider d-none d-md-block" />
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
  </ul>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        <h3>FieldApp reports</h3>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a>
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            </div>
          </li>        
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <button onClick={handleLogout} className="btn btn-primary btn-user btn-block">
              Logout
              </button>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
          <Chart />
      </div>
    </div>
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © TrueFootprint 2021</span>
        </div>
      </div>
    </footer>
  </div>
</div>
  );
}

export default Dashboard;
