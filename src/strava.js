import React, { Component } from 'react';
import './strava.css';

class Strava extends Component {
  render() {
    return (
      <div className="strava-wrap">
        <iframe height='405' width='590' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/activities/2767149864/embed/6b65c1346f97870a215bfc8ab64e4162e3e398cf'></iframe>
      </div>
    );
  }
}

export default Strava;