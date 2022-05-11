import React from "react";
import Chart from "../chart";
import TopNavBar from "./top_nav_bar";
import * as Rbs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sb-admin-2.css";
import logo from "../../TF-White.svg";
import { propTypes } from "react-bootstrap/esm/Image";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  let history = useHistory();
  function handleLogout(event) {
    localStorage.removeItem("token");
    props.setLogin(false);
    history.push("/");
  }

  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <div className="sidebar-brand-icon">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sidebar-brand-text mx-3"></div>

        {/* <hr className="sidebar-divider my-0" /> */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            <h5 style={{ paddingLeft: "25px" }}>Report Viewer</h5>
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
          <TopNavBar handleLogout={handleLogout} />
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
