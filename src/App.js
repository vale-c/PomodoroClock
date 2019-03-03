import React, { Component } from 'react';
import './App.scss';
import Clock from './Clock';
import { Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '25 minutes',
      newDeadline: ''
    }
  }
  
  changeDeadline() {
    console.log('state', this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {

    return <div className="App container">
      <div className="countDownTitle" style={{ marginTop: '3em'}}>
        <h1 style={{fontWeight: '700', fontSize: '3rem'}}>My Pomodoro Clock</h1>
      </div>

      <Clock deadline= {this.state.deadline} />

      <Row>
        <Col className="startTimer" style={{ display: 'flex', alignContent: 'space-between' }}>
          <Button variant="btn btn-success" size="lg">Start</Button>
        </Col>

        <Col className="resetTimer" style={{ display: 'flex', alignContent: 'space-between' }}>
            <Button variant="btn btn-danger" size="lg" className="reset-btn">Reset</Button>
        </Col>
      </Row>

    </div>;

  }


}

export default App;
