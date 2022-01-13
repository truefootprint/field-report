import React, { useState, useEffect, useCallback } from "react";
import MultiChoiceGraph from "./multi_choice_graph.js";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import Gallery from "react-photo-gallery";
import {
  Col,
  Row,
  Spinner,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImagePagination from "./pagination.js";

let host;
host = "https://field-backend.truefootprint.com";
//host = "http://localhost:3000";
// if (window.location.hostname === "localhost") {
//   host = "http://localhost:3000";
// } else {
//   host = "https://field-backend.truefootprint.com";
// }
function Chart() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

  function handleChange(event) {
    //this.setState({[event.target.name]: event.target.value});
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
        //setPhotos(res.data.projects.sort((a, b) => a.name.localeCompare(b.name)));
      });
  }

  const options = {
    scales: { xAxes: [{ ticks: { beginAtZero: true, precision: 0 } }] },
  };

  function project_issues(data) {
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
          </div>
        </Col>
      );
    }
  }

  function renderPhotos(data, photos) {
    console.log("DATA");
    console.log(data);
    if (data && photos) {
      return (
        <Col>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Gallery (reponses)
              </h6>
            </div>
            <div className="card-body">
              <Gallery photos={photos} onClick={openLightbox}/>
              <hr/>
              <ImagePagination
                requestNextImages={requestNextImages}
                photo_count={data.photos_count}
              />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map((x) => ({
                        ...x,
                        srcset: "hello", //x.srcSet,
                        caption: x.text, //x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </div>
        </Col>
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
                  <Modal onClose={closeIssuesLightbox}>
                    <Carousel
                      currentIndex={currentIssuesImage}
                      views={issue_photos.map((x) => ({
                        ...x,
                        srcset: "hello", //x.srcSet,
                        caption: x.text, //x.title,
                      }))}
                    />
                  </Modal>
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
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Select Panel </h6>
        </div>
        <div className="card-body">
          <Form>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Programmes</Form.Label>
                  <Form.Control
                    id="programme-select"
                    as="select"
                    onChange={selectProgrammeHandler}
                  >
                    {programmes &&
                      programmes.map((programme) => (
                        <option key={programme.id} value={programme.id}>
                          {programme.name}
                        </option>
                      ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Projects</Form.Label>
                  <Form.Control
                    id="project-select"
                    as="select"
                    onChange={selectProjectHandler}
                  >
                    <option value="" onSelect={selectProjectHandler}>
                      {" "}
                      All
                    </option>
                    {projects &&
                      projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Start date</Form.Label>
                  <FormControl
                    id="start-date-select"
                    onChange={(date) => {
                      setSelectedValues({
                        ...selectedValues,
                        startDate: date.target.value,
                      });
                    }}
                    type="date"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <Form.Label>End date</Form.Label>
                  <FormControl
                    id="end-date-select"
                    onChange={(date) =>
                      setSelectedValues({
                        ...selectedValues,
                        endDate: date.target.value,
                      })
                    }
                    type="date"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    onClick={handleGenerateReport}
                    style={{ "margin-top": "30px" }}
                  >
                    Generate Report
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </div>

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
    </div>
  );
}

export default Chart;
