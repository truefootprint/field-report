import React, { useState, useEffect, useCallback } from "react";
import {
  Dropdown,
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

function TopNavBar({ handleLogout, setLocale }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>
      <h3>FieldApp reports</h3>

      <ul className="navbar-nav ml-auto">
        {/* 
        <!-- Nav Item - Alerts --> */}
        {/* <li className="nav-item dropdown no-arrow"> */}
        <select onChange={(e) => setLocale(e.target.value)} style={{marginTop: "14px", marginBottom: "14px"}} className="form-select" aria-label="Default select example">
          <option value="en" selected="selected">English</option>
          <option value="fr">Français</option>
          </select>
        {/* </li> */}
        <div className="topbar-divider d-none d-sm-block" />
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-user btn-block"
            >
              Logodddut
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;
