import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { AppContext } from "../../context";
import ChartListing from "../chart_listing";
import TopNavBar from "./top_nav_bar";
import * as Rbs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sb-admin-2.css";
import logo from "../../TF-White.svg";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import {
  Col,
  Row,
  Spinner,
  Container,
  Form,
  FormControl,
  Modal,
  Button,
  Table,
} from "react-bootstrap";

let host;
//host = "https://field-backend.truefootprint.com";
host = "http://localhost:3000";

function Dashboard(props) {
  const [data, setData] = useState({});
  const [spinner, setSpinner] = useState(false);
  const { userInterfaceText, setUserInterfaceText } = useContext(AppContext);

  function handleGenerateReport() {
    setSpinner(true);
    setData({});
    let request = {
      project_id: document.getElementById("project-select").value,
      programme_id: document.getElementById("programme-select").value,
      startDate: document.getElementById("start-date-select").value,
      endDate: document.getElementById("end-date-select").value,
    };
    axios
      .get(`${host}/reports/99`, {
        headers: {
          Authorization: `Basic ${localStorage.getItem("token")}`,
          "Accept-Language": `${localStorage.getItem("locale")}`,
        },
        params: request,
      })
      .then((res) => {
        setSpinner(false);
        setData(res.data);
        setUserInterfaceText(res.data.user_interface_text);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setLocale(locale) {
    //localStorage.removeItem("locale");
    localStorage.setItem("locale", locale);
    console.log("DATA?");
    console.log(data);
    if (Object.keys(data).length) {
      handleGenerateReport();
    }
  }

  let history = useHistory();
  function handleLogout(event) {
    localStorage.setItem("locale", "en");
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
          <TopNavBar handleLogout={handleLogout} setLocale={setLocale} />
          <div className="container-fluid">
            <ChartListing
              spinner={spinner}
              setData={setData}
              data={data}
              handleGenerateReport={handleGenerateReport}
            />
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
