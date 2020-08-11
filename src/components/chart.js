import React, { useState, useEffect, useCallback } from "react";
import MultiChoiceGraph from "./multi_choice_graph.js";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import Gallery from "react-photo-gallery";
import * as Rbs from "react-bootstrap";
import DatePicker from "react-datepicker";
import Carousel, { Modal, ModalGateway } from "react-images";

let host;
//shost = "https://field-backend.truefootprint.com";
host = "http://localhost:3000";
// if (window.location.hostname === "localhost") {
//   host = "http://localhost:3000";
// } else {
//   host = "https://field-backend.truefootprint.com";
// }

const photos = [
  {
    src: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
    width: 1,
    height: 1,
  },
];

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
  const [data, setData] = useState({});
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
      .get(`${host}/reports/setup_report_form`)
      .then((res) => {
        setProgrammes(res.data.programmes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // END OF USE EFFECT FOR INTIAL LOAD

  function handleGenerateReport() {
    setData({});
    let request = {
      project_id: document.getElementById("project-select").value,
      programme_id: document.getElementById("programme-select").value,
      startDate: document.getElementById("start-date-select").value,
      endDate: document.getElementById("end-date-select").value,
    };
    axios
      .get(`${host}/reports/99`, {
        params: request,
      })
      .then((res) => {
        setData(res.data);
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
      .get(`${host}/reports/get_projects_list/${event.target.value}`)
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const options = { scales: { xAxes: [{ ticks: { min: 0 } }] } };

  function project_issues(data) {
    if (data && data.project_issues) {
      return (
        <Rbs.Col md={4}>
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
        </Rbs.Col>
      );
    }
  }

  return (
    <div>
      <h3>Reports</h3>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Select Panel{" "}
            <small>
              {" "}
              beta version 0.3 (deployed 7 Aug 2020 - 10:51 SAST). Using host:{" "}
              {host}
            </small>
          </h6>
        </div>
        <div className="card-body">
          <Rbs.Form>
            <Rbs.Form.Group>
              <Rbs.Row>
                <Rbs.Col>
                  <Rbs.Form.Label>Programmes</Rbs.Form.Label>
                  <Rbs.Form.Control
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
                  </Rbs.Form.Control>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>Projects</Rbs.Form.Label>
                  <Rbs.Form.Control
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
                  </Rbs.Form.Control>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>Start date</Rbs.Form.Label>
                  <Rbs.FormControl
                    id="start-date-select"
                    onChange={(date) =>
                      setSelectedValues({
                        ...selectedValues,
                        startDate: date.target.value,
                      })
                    }
                    type="date"
                    style={{ width: "100%" }}
                  />
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>End date</Rbs.Form.Label>
                  <Rbs.FormControl
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
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Button variant="primary" onClick={handleGenerateReport}>
                    Generate Report
                  </Rbs.Button>
                </Rbs.Col>
              </Rbs.Row>
            </Rbs.Form.Group>
          </Rbs.Form>
        </div>
      </div>

      <Rbs.Row>
        <Rbs.Col>
          <h2> Programme name: {data.programme_name} </h2>
          <h3> Project name: {data.project_name} </h3>
        </Rbs.Col>
      </Rbs.Row>
      <br />

      {project_issues(data)}

      {data.activity &&
        data.activity.map((project_activity) => (
          <MultiChoiceGraph
            key={project_activity.project_activity_name}
            project_activity={project_activity}
          />
        ))}


      <Rbs.Container fluid>
        <Rbs.Row>
          <Rbs.Col>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Gallery
                </h6>
              </div>
              <div className="card-body">
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
            </div>
          </Rbs.Col>





          {data.photos &&
            data.photos.map((photo) => (
              <Rbs.Col xs={6} md={3} key={photo.photo_url}>
                <Rbs.Card>
                  <Rbs.Card.Body>
                    <Rbs.Image src={photo.photo_url} fluid />
                    <pre>
                      <small>
                        Programme name: {photo.programme_name} <br />
                        Project name: {photo.project_name} <br />
                        Activity name: {photo.activity_name} <br />
                        User name, id: {photo.user_name}, {photo.user_id} <br />
                        Response Id: {photo.response_id} <br />
                        Project Question text: {photo.project_question_text}
                      </small>
                    </pre>
                  </Rbs.Card.Body>
                </Rbs.Card>
              </Rbs.Col>
            ))}
        </Rbs.Row>
      </Rbs.Container>
    </div>
  );
}
export default Chart;
