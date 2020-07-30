import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as Rbs from 'react-bootstrap';
import DatePicker from "react-datepicker";


function MultiChoiceGraph(props) {
  var randomColor = require('randomcolor'); // import the script
  return (
      <Rbs.Row>
          <Rbs.Col>
            <h3> Activity: { props.project_activity.project_activity_name } </h3>
              <Rbs.Row>
              {props.project_activity.project_activity_graphs.map((graph) => (
                <Rbs.Col md={3} key={graph.question_id}>
                  <div >
                    <div>{ graph.question_text }</div>
                    <BarChart layout="vertical" width={500} height={300} data={graph.question_reponses_graph}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number"/>
                      <YAxis dataKey="option_text" type="category"/>
                      <Tooltip />
                      <Bar dataKey="count" fill={randomColor({hue: 'green'})}/>
                    </BarChart>
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