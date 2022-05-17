import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import { AppContext } from '../../context';
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
import translate from "../../helpers/translate";

function SelectionPanel({
  programmes,
  projects,
  selectProgrammeHandler,
  selectProjectHandler,
  setSelectedValues,
  selectedValues,
  handleGenerateReport,
}) {
  const { userInterfaceText, setUserInterfaceText } = useContext(AppContext);
  return (
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
                  {translate("report_generate_report_label", userInterfaceText)}
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default SelectionPanel;
