import React, { useState, useEffect, useCallback } from "react";
import { Col, Row, Spinner, Container, Form, FormControl, Modal, Button, Table } from "react-bootstrap";
import { HorizontalBar } from "react-chartjs-2";

function ProjectIssueGraph({data, options, handleShow, renderIf}){
    if(renderIf) {
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
                  {data.project_issues.actual_issues && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleShow("1")}
                    >
                      View issues
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      );
    } else {
        return null;
    }
}

export default ProjectIssueGraph;