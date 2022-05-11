import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Spinner, Container, Form, FormControl, Modal, Button, Table } from "react-bootstrap";
import Carousel, { Modal as ModalCarousel, ModalGateway } from "react-images";
import axios from 'axios';
import SelectionPanel from "./selection_panel";
import MultiChoiceGraph from "../multi_choice_graph";
import ResponsePhotos from "../response_photos";
import { HorizontalBar } from "react-chartjs-2";
import Gallery from "react-photo-gallery";
import DatePicker from "react-datepicker";
import ImagePagination from "../pagination";

let host;
//host = "https://field-backend.truefootprint.com";
host = "http://localhost:3000";

function Chart() {
  const [currentIssuesImage, setCurrentIssuesImage] = useState(0);
  const [viewerIssuesIsOpen, setIssuesViewerIsOpen] = useState(false);

  const openIssuesLightbox = useCallback((event, { photo, index }) => {
    setCurrentIssuesImage(index);
    setIssuesViewerIsOpen(true);
  }, []);

  const closeIssuesLightbox = () => {
    setCurrentIssuesImage(0);
    setIssuesViewerIsOpen(false);
  };

  const [select_id, setSelectedId] = useState(0);

  const handleClose = () => setSelectedId(0);
  const handleShow = (id) => setSelectedId(id);

  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);
  const [issue_photos, setIssuePhotos] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [selectedValues, setSelectedValues] = useState({
    project_id: "",
    programme_id: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    axios
      .get(`${host}/reports/setup_report_form`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}` },
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
        headers: { Authorization: `Basic ${localStorage.getItem("token")}` },
        params: request,
      })
      .then((res) => {
        setSpinner(false);
        setData(res.data);
        console.log("WHAT IS IN DATA PHOTOS");
        console.log(res.data);
        setPhotos(res.data.photos);
        setIssuePhotos(res.data.issue_photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        headers: { Authorization: `Basic ${localStorage.getItem("token")}` },
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

  function requestNextImages(offset, limit, whichPage) {
    console.log("-----requestNextImages-----")
    let request = {
      project_id: document.getElementById("project-select").value,
      programme_id: document.getElementById("programme-select").value,
      startDate: document.getElementById("start-date-select").value,
      endDate: document.getElementById("end-date-select").value,
      offset: offset,
      limit: limit,
      whichPage: whichPage
    };
    axios
      .get(`${host}/reports/photos`, {
        headers: { Authorization: `Basic ${localStorage.getItem("token")}` },
        params: request,
      })
      .then((res) => {
        console.log("WHATS IN MY RES?");
        console.log(res);
        console.log(whichPage);
        if(whichPage=='responses'){
          setPhotos(res.data.photos);
        } else {
          setIssuePhotos(res.data.issue_photos);
        }
      });
  }

  const options = {
    scales: { xAxes: [{ ticks: { beginAtZero: true, precision: 0 } }] },
  };

  function project_issues(data) {
    console.log("data.project_issues");
    console.log(data.project_issues);
    if (data && data.project_issues) {
      return (
        <Col md={4}>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Issues Reported
              </h6>              
            </div>
            <div className="card-body">
              <HorizontalBar data={data.project_issues} options={options} />
            </div>
            <div className="card-footer" style={{ padding: "5px" }}>
                    <Row>
                      <Col md={3}>
                      {data.project_issues.actual_issues && <Button size="sm" variant="primary" onClick={() => handleShow("1")}>
                      View issues
              </Button>}
                      </Col>
                    </Row>
                  </div>
          </div>
        </Col>
      );
    }
  }

  function renderPhotos(data, photos) {
    if (data && photos) {
      return (
        <ResponsePhotos photos={photos} data={data} requestNextImages={requestNextImages}/>
      );
    }
  }

  function renderIssuePhotos(data, issue_photos) {
    if (data && issue_photos) {
      return (
        <Col>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Gallery (Issues)
              </h6>
            </div>
            <div className="card-body">
              <Gallery
                photos={issue_photos}
                onClick={openIssuesLightbox}
              />
              <hr/>
              <ImagePagination
                requestNextImages={requestNextImages}
                photo_count={data.issue_photos_count}
                whichPage={"issues"}
              />
              <ModalGateway>
                {viewerIssuesIsOpen ? (
                  <ModalCarousel onClose={closeIssuesLightbox}>
                    <Carousel
                      currentIndex={currentIssuesImage}
                      views={issue_photos.map((x) => ({
                        ...x,
                        srcset: "hello", //x.srcSet,
                        caption: x.text, //x.title,
                      }))}
                    />
                  </ModalCarousel>
                ) : null}
              </ModalGateway>
            </div>
          </div>
        </Col>
      );
    }
  }

  return (
    <div>
      <SelectionPanel programmes={programmes} 
      projects={projects} selectProgrammeHandler={selectProgrammeHandler} 
      selectProjectHandler={selectProjectHandler} handleGenerateReport={handleGenerateReport}/>

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
      {spinner && (
        <Row>
          <br/><br/>
          <Col md={{ span: 3, offset: 5 }}>
            <Spinner animation="border" variant="primary" />&nbsp;
            {/* <Spinner animation="border" variant="primary" />&nbsp;
            <Spinner animation="border" variant="primary" /> */}
          </Col>
        </Row>
      )}
      {data && data.activity && (
        <div>
          {project_issues(data)}
          {data.activity
            .sort((a, b) => (a.activity_order > b.activity_order ? 1 : -1))
            .map((project_activity) => (
              <MultiChoiceGraph
                key={project_activity.project_activity_name}
                project_activity={project_activity}
              />
            ))}
          <Container fluid>
            <Row>{renderPhotos(data, photos)}</Row>
            <Row>{renderIssuePhotos(data, issue_photos)}</Row>
          </Container>
        </div>
      )}
      {data && data.project_issues &&
      <Modal dialogClassName="modal-90w" show={"1"===select_id} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Issues</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
            <th colspan="3">Question</th>
              <th colspan="1">Issue ID</th>
              <th colspan="4">Resolved</th>
              <th colspan="3">User ID</th>
              <th colspan="3">Note</th>
              <th colspan="3">Date</th>
            </tr>
          </thead>               
          <tbody>
          {data.project_issues.actual_issues.map((issue) => (
            <tr>
              <td colspan="3">{issue.project_question_text}</td>
              <td  colspan="1">{issue.issue_id}</td>
              <td  colspan="4">{issue.resolved ? 'Resolved' : 'Not resolved'}</td>
              <td  colspan="3">{issue.user_id}</td>
              <td colspan="3">{issue.note}</td>
              <td colspan="3">{issue.date}</td>
            </tr>
          ))}   
          </tbody>
        </Table>
        </Modal.Body>
      </Modal>
      }
    </div>
  );
}

export default Chart;
