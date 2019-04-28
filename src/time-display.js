import React, { Component } from 'react';
import './time-display.css';
import Moment from 'react-moment';

class TimeDisplay extends Component {
    render() {
        return (
            <div className="time-wrap">
                The crash occurred <Moment fromNow>2019-02-17T16:00-0000</Moment>
            </div>
        );
    }
}

export default TimeDisplay;