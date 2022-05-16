import React, { useState, useEffect, useCallback } from "react";
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

const IssueModal = ({select_id, handleClose, data}) => {
  return (
    <Modal
      dialogClassName="modal-90w"
      show={"1" === select_id}
      onHide={handleClose}
      centered
    >
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
                <td colspan="1">{issue.issue_id}</td>
                <td colspan="4">
                  {issue.resolved ? "Resolved" : "Not resolved"}
                </td>
                <td colspan="3">{issue.user_id}</td>
                <td colspan="3">{issue.note}</td>
                <td colspan="3">{issue.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default IssueModal;
