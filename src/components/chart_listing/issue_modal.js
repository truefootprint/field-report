import React, { useContext } from "react";
import translate from "../../helpers/translate";
import { AppContext } from "../../context";
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
  const { userInterfaceText, setUserInterfaceText } = useContext(AppContext);

  return (
    <Modal
      dialogClassName="modal-90w"
      show={"1" === select_id}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{translate("report_issue_modal_project_issues_label", userInterfaceText)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th colspan="3">{translate("report_issue_modal_question_label", userInterfaceText)}</th>
              <th colspan="1">{translate("report_issue_modal_issue_id_label", userInterfaceText)}</th>
              <th colspan="4">{translate("report_issue_modal_resolved_label", userInterfaceText)}</th>
              <th colspan="3">{translate("report_response_modal_user_id_label", userInterfaceText)}</th>
              <th colspan="3">{translate("report_issue_modal_note_label", userInterfaceText)}</th>
              <th colspan="3">{translate("report_response_modal_date_label", userInterfaceText)}</th>
            </tr>
          </thead>
          <tbody>
            {data.project_issues.actual_issues.map((issue) => (
              <tr>
                <td colspan="3">{issue.project_question_text}</td>
                <td colspan="1">{issue.issue_id}</td>
                <td colspan="4">
                  {issue.resolved ? translate("report_issue_modal_resolved_label", userInterfaceText) : translate("report_issue_modal_not_resolved_label", userInterfaceText)}
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
