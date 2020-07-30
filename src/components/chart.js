import React, { useState, useEffect } from 'react';
import MultiChoiceGraph from "./multi_choice_graph.js"
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as Rbs from 'react-bootstrap';
import DatePicker from "react-datepicker";

function Chart() {
	const [data, setData] = useState({});
  const [programmes, setProgrammes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedValues, setSelectedValues] = useState({project_id: '', programme_id: '', startDate: new Date(), endDate: new Date()})

  useEffect(() => {

      //     axios.get(`http://localhost:3000/reports/20`, {
      //   params: selectedValues
      // }).then(res => {
      //     console.log("DATAT")
      //     console.log(res.data)
      //     setData(res.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })

    axios.get("http://localhost:3000/reports/setup_report_form")
        .then(res => {
          console.log("PROGRAMMES")
          console.log(res.data.programmes)
          setProgrammes(res.data.programmes)
        })
        .catch(err => {
          console.log(err)
        })
  }, []) // END OF USE EFFECT FOR INTIAL LOAD

  function handleGenerateReport(){
      console.log(selectedValues)
      // axios({
      //     method: 'get',
      //     url: `http://localhost:3000/reports/${selectedValues.project_id}`,
      //     data: selectedValues
      //   });

      axios.get(`http://localhost:3000/reports/99`, {
        params: selectedValues
      }).then(res => {
          console.log("DATAT")
          console.log(res.data)
          setData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }

  function selectProjectHandler(event){
    setSelectedValues({...selectedValues, project_id: event.target.value})
    console.log(event.target.value)
    //get report for project
    // axios.get(`http://localhost:3000/reports/${event.target.value}`)
    //     .then(res => {
    //       console.log(res.data.activity)
    //       setData(res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
  }

  function selectProgrammeHandler(event){
    setSelectedValues({...selectedValues, programme_id: event.target.value})
    // get all projects for this programme selected
    axios.get(`http://localhost:3000/reports/get_projects_list/${event.target.value}`)
        .then(res => {
          console.log("PROGRAMMES")
          console.log(res.data.projects)
          setProjects(res.data.projects)
        })
        .catch(err => {
          console.log(err)
        })
  }
  return (


    <div>
    <Rbs.Row>
    <Rbs.Col>
      <h1>Reports</h1>
        <Rbs.Form>
              <Rbs.Form.Group controlId="exampleForm.ControlSelect2">
              <Rbs.Row>
                <Rbs.Col>
                  <Rbs.Form.Label>Programmes</Rbs.Form.Label>
                  <Rbs.Form.Control as="select">
                  {programmes && programmes.map((programme) => (
                    <option key={programme.id} value={programme.id} onClick={selectProgrammeHandler}>
                      {programme.name}
                    </option>
                  ))}
                  </Rbs.Form.Control>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>Projects</Rbs.Form.Label>
                  <Rbs.Form.Control as="select">
                    <option value="" onClick={selectProjectHandler}> All</option>
                  {projects && projects.map((project) => (
                    <option key={project.id} value={project.id} onClick={selectProjectHandler}>
                      {project.name}
                    </option>
                  ))}
                  </Rbs.Form.Control>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>Start date</Rbs.Form.Label>
                  <Rbs.FormControl onChange={date => setSelectedValues({...selectedValues, startDate: date.target.value})} type="date" style={{width:'100%'}}/>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Form.Label>End date</Rbs.Form.Label>
                  <Rbs.FormControl onChange={date => setSelectedValues({...selectedValues, endDate: date.target.value})} type="date" style={{width:'100%'}}/>
                </Rbs.Col>
                <Rbs.Col>
                  <Rbs.Button variant="primary" onClick={handleGenerateReport}>Generate Report</Rbs.Button>
                </Rbs.Col>
              </Rbs.Row>
              </Rbs.Form.Group>
        </Rbs.Form>
    </Rbs.Col>
    </Rbs.Row>

    <Rbs.Row>
      <Rbs.Col>
        <h2> Programme name: {data.programme_name} </h2>
        <h3> Project name: {data.project_name} </h3>
      </Rbs.Col>
    </Rbs.Row>
    <br/>

    {data.activity && data.activity.map((project_activity) => (
      <MultiChoiceGraph key={project_activity.project_activity_name} project_activity={project_activity}/>
    ))}


    </div>
  	);


}

export default Chart;
