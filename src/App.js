import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "./components/chart.js"
import * as Rbs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  	<Rbs.Container fluid>
  	<Rbs.Row>
	    <Rbs.Col>
		    <div className="App">
		      <Chart />
		    </div>
	    </Rbs.Col>
    </Rbs.Row>
    </Rbs.Container>
  );
}

export default App;
