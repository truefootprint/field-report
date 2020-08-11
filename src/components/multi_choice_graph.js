import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {HorizontalBar} from 'react-chartjs-2';
import * as Rbs from 'react-bootstrap';
import DatePicker from "react-datepicker";
const options = {scales: {xAxes: [{ticks: {min: 0}}]}}


function MultiChoiceGraph(props) {
  var randomColor = require('randomcolor'); // import the script
  let color = "#1e9ed9"; //randomColor({hue: 'blue'});
  return (
      <Rbs.Row>
          <Rbs.Col>
            <h3> Activity: { props.project_activity.project_activity_name } </h3>
            <br/>
              <Rbs.Row>
              {props.project_activity.project_activity_graphs.map((graph) => (
                <Rbs.Col md={4} key={graph.question_id}>
                       {/* Bar Chart */}
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">{ graph.question_text }</h6>
                        </div>
                        <div className="card-body">
                            <HorizontalBar options={options} data={graph.question_reponses_graph} />
                          <hr />
                        </div>
                      </div>
                  <br/><br/>
                </Rbs.Col>
                ))}
              </Rbs.Row>
          </Rbs.Col>
      </Rbs.Row>
      )
}

export default MultiChoiceGraph;



