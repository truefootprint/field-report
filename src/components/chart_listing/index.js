import React, { useState, useEffect, useCallback } from "react";
import translate from "../../helpers/translate"
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
import axios from "axios";
import SelectionPanel from "./selection_panel";
import ProjectIssueGraph from "./project_issue_graph";
import MultiChoiceGraph from "../multi_choice_graph";
import ResponsePhotos from "../gallery/response_photos";
import IssuePhotos from "../gallery/issue_photos";
import IssueModal from "./issue_modal";
import { Waypoint } from "react-waypoint";

let host;
//host = "https://field-backend.truefootprint.com";
host = "http://localhost:3000";

function ChartListing({handleGenerateReport, data, setData}) {
  const [select_id, setSelectedId] = useState(0);

  const handleClose = () => setSelectedId(0);
  const handleShow = (id) => setSelectedId(id);

  const [test, setTest] = useState(false);
  const [showWayPoint, setShowWayPoint] = useState(false);
  const [showResponsePhotos, setShowResponsePhotos] = useState(false);
  const [showIssuePhotos, setShowIssuePhotos] = useState(false);

  const [photos, setPhotos] = useState([]);
  const [photosCount, setPhotosCount] = useState(0);
  const [issuePhotos, setIssuePhotos] = useState([]);
  const [issuePhotosCount, setIssuePhotosCount] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [projects, setProjects] = useState([]);


  const [selectedValues, setSelectedValues] = useState({
    project_id: "",
    programme_id: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    axios
      .get(`${host}/reports/setup_report_form`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}`, 
        "Accept-Language": `${localStorage.getItem("locale")}` },
      })
      .then((res) => {
        setProgrammes(
          res.data.programmes.sort((a, b) => a.name.localeCompare(b.name))
        );
      })
      .catch((err) => {
        console.log(err);
      });
    document.getElementById("start-date-select").value = "2020-06-01";
    document.getElementById("end-date-select").value = new Date()
      .toISOString()
      .slice(0, 10);
  }, []); // END OF USE EFFECT FOR INTIAL LOAD


  function selectProjectHandler(event) {
    console.log("Set project id");
    console.log(event.target.value);
    setSelectedValues({ ...selectedValues, project_id: event.target.value });
  }

  function selectProgrammeHandler(event) {
    setSelectedValues({ ...selectedValues, programme_id: event.target.value });
    // get all projects for this programme selected
    axios
      .get(`${host}/reports/get_projects_list/${event.target.value}`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}`,  
        "Accept-Language": `${localStorage.getItem("locale")}` },
      })
      .then((res) => {
        setProjects(
          res.data.projects.sort((a, b) => a.name.localeCompare(b.name))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function requestIntialImages(offset, limit, whichPage) {
    console.log("-----requestINTIALIMAGES-----");
    let request = {
      project_id: document.getElementById("project-select").value,
      programme_id: document.getElementById("programme-select").value,
      startDate: document.getElementById("start-date-select").value,
      endDate: document.getElementById("end-date-select").value,
      offset: offset,
      limit: limit,
      whichPage: whichPage,
    };
    axios
      .get(`${host}/reports/photos`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}`, 
        "Accept-Language": `${localStorage.getItem("locale")}` },
        params: request,
      })
      .then((res) => {
        console.log("WHATS IN MY RES?");
        console.log(res);
        console.log(whichPage);
        if (whichPage == "responses") {
          setShowResponsePhotos(true);
          setPhotosCount(res.data.photos_count);
          setPhotos(res.data.photos);
        } else {
          setShowIssuePhotos(true);
          setIssuePhotosCount(res.data.issue_photos_count);
          setIssuePhotos(res.data.issue_photos);
        }
      });
  }

  function requestNextImages(offset, limit, whichPage) {
    console.log("-----requestNextImages-----");
    let request = {
      project_id: document.getElementById("project-select").value,
      programme_id: document.getElementById("programme-select").value,
      startDate: document.getElementById("start-date-select").value,
      endDate: document.getElementById("end-date-select").value,
      offset: offset,
      limit: limit,
      whichPage: whichPage,
    };
    axios
      .get(`${host}/reports/photos`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}`, 
        "Accept-Language": `${localStorage.getItem("locale")}` },
        params: request,
      })
      .then((res) => {
        console.log("WHATS IN MY RES?");
        console.log(res);
        console.log(whichPage);
        if (whichPage == "responses") {
          setPhotos(res.data.photos);
        } else {
          setIssuePhotos(res.data.issue_photos);
        }
      });
  }

  const options = {
    scales: { xAxes: [{ ticks: { beginAtZero: true, precision: 0 } }] },
  };

  return (
    <div>
      <SelectionPanel
        programmes={programmes}
        projects={projects}
        selectProgrammeHandler={selectProgrammeHandler}
        selectProjectHandler={selectProjectHandler}
        handleGenerateReport={handleGenerateReport}
      />
      <Row>
        <Col>
          <h3>
            {data && data.activity
              ? `Programme name: ${data.programme_name}, Project name: ${data.project_name}`
              : ""}
          </h3>
        </Col>
      </Row>
      <br />
      {data && data.activity && (
        <div>
          <ProjectIssueGraph
            renderIf={data && data.project_issues}
            handleShow={handleShow}
            data={data}
            options={options}
          />
          {data.activity
            .sort((a, b) => (a.activity_order > b.activity_order ? 1 : -1))
            .map((project_activity, index) => {
              return (
                <MultiChoiceGraph
                  key={project_activity.project_activity_name}
                  project_activity={project_activity}
                />
              );
            })}
          <Container fluid>
            <Row>
              {showResponsePhotos && data && photos && (
                <ResponsePhotos
                  photos={photos}
                  photosCount={photosCount}
                  requestNextImages={requestNextImages}
                />
              )}
              {showIssuePhotos && data && issuePhotos && (
                <IssuePhotos
                  issuePhotos={issuePhotos}
                  issuePhotosCount={issuePhotosCount}
                  requestNextImages={requestNextImages}
                />
              )}
            </Row>
          </Container>
        </div>
      )}
      {data && data.project_issues && (
        <IssueModal
          select_id={select_id}
          handleClose={handleClose}
          data={data}
        />
      )}
      {data && data.activity && (
        <Waypoint
          scrollableAncestor={window}
          topOffset={"96%"}
          onEnter={function (props) {
            // Fetch images
            if (!showResponsePhotos) {
              requestIntialImages(0, 10, "responses");
            }
            if (!showIssuePhotos) {
              requestIntialImages(0, 10, "issues");
            }
          }}
        />
      )}
    </div>
  );
}

export default ChartListing;
