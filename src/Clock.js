import React, { Component } from 'react';
import './App.scss';
import tomato from './assets/tomato.svg';
import { Col, Row } from 'react-bootstrap';

const tomatoStyle = {
    width: 250,
    height: 250,
};

const customClock = {
    textAlign: "center"
}

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({ days, hours, minutes, seconds });
    }


    stop() {
        clearInterval(this.interval);
    }

    leading0(num) {
        //if number is less than 10 add a leading 0
        return num < 10 ? '0' + num : num;
    }

    render() {

        return <Row>
            <Col md={12} className="customClock" style={customClock}>
                <img
                    className="img-responsive"
                    src={tomato}
                    style={tomatoStyle}
                    alt="tomato"
                />
            </Col>
            
            <Row className="myClock show-grid">
                <Col sm={6} md={3} className="clockHours">
                    <strong>{this.state.hours}</strong>
                </Col>
                <Col sm={6} md={3} className="clockMinutes">
                    <strong>{this.state.minutes}</strong>
                </Col>
                <Col sm={6} md={3} className="clockSeconds">
                    <strong>{this.state.seconds}</strong>
                </Col>
            </Row>

        </Row>;

    }
}


export default Clock;
