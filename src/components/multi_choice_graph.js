import React, { useState, useEffect } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import * as Rbs from "react-bootstrap";
import DatePicker from "react-datepicker";

function MultiChoiceGraph(props) {
  const [select_id, setSelectedId] = useState(0);

  const handleClose = () => setSelectedId(0);
  const handleShow = (id) => setSelectedId(id);

  const showResponses = () => {
    //setCurrentImage(0);
    //setViewerIsOpen(false);
  };

  const options = {
    scales: {
      yAxes: [{}],
      xAxes: [
        {
          barThickness: 10,
          maxBarThickness: 18,
          ticks: { min: 0, precision: 0 },
          barPercentage: 0.5,
        },
      ],
    },
  };
  var randomColor = require("randomcolor"); // import the script
  let color = "#1e9ed9"; //randomColor({hue: 'blue'});
  return (
    <>
      <Rbs.Row>
        <Rbs.Col>
          <h3> Activity: {props.project_activity.project_activity_name} </h3>
          <br />
          <Rbs.Row>
            {props.project_activity.project_activity_graphs.map((graph) => (
              <Rbs.Col md={4} key={graph.question_id}>
                {/* Bar Chart */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      {graph.question_text}                       
                    </h6>     
                                 
                  </div>
                  <div className="card-body" style={{ padding: "5px" }}>
                    <HorizontalBar
                      options={options}
                      data={graph.question_reponses_graph}
                    />
                  </div>
                  <div className="card-footer" style={{ padding: "5px" }}>
                  <Rbs.Row>
                  <Rbs.Col md={3}>
                    <Rbs.Button size="sm" variant="info" onClick={() => handleShow("graph-" + graph.question_id)}>
                      Enlarge graph 
                    </Rbs.Button>  
                    </Rbs.Col>
                    <Rbs.Col md={3}>
                    {graph.free_text_question && <Rbs.Button size="sm" variant="primary" onClick={() => handleShow(graph.question_id)}>
                      View responses
                    </Rbs.Button>}
                    </Rbs.Col>
                  </Rbs.Row>
                  </div>
                </div>
                <br />
                <br />
                
                <Rbs.Modal dialogClassName="modal-90w" show={"graph-" + graph.question_id===select_id} onHide={handleClose} centered>
                  <Rbs.Modal.Header closeButton>
                    <Rbs.Modal.Title>{graph.question_text}</Rbs.Modal.Title>
                  </Rbs.Modal.Header>
                  <Rbs.Modal.Body>
                    <HorizontalBar
                        options={options}
                        data={graph.question_reponses_graph}
                      />
                  </Rbs.Modal.Body>
                </Rbs.Modal>
                {graph.free_text_question && <Rbs.Modal dialogClassName="modal-90w" show={graph.question_id===select_id} onHide={handleClose} centered>
                  <Rbs.Modal.Header closeButton>
                    <Rbs.Modal.Title>{graph.question_text}</Rbs.Modal.Title>
                  </Rbs.Modal.Header>
                  <Rbs.Modal.Body>
                    <Rbs.Table striped bordered hover responsive variant="dark">
                      <thead>
                        <tr>
                          <th colspan="1">User ID</th>
                          <th colspan="5">Response</th>
                          <th colspan="3">Date</th>
                          <th colspan="3">Project</th>
                        </tr>
                      </thead>               
                      <tbody>
                      {graph.responses.map((response) => (
                        <tr>
                          <td  colspan="1">{response.user_id}</td>
                          <td  colspan="5">{response.response}</td>
                          <td  colspan="3">{response.date}</td>
                          <td colspan="3">{response.project}</td>
                        </tr>
                      ))}
                      </tbody>
                    </Rbs.Table>
                  </Rbs.Modal.Body>
                </Rbs.Modal>}
              </Rbs.Col>
              
            ))}
          </Rbs.Row>
        </Rbs.Col>
      </Rbs.Row>


    </>
  );
}

export default MultiChoiceGraph;