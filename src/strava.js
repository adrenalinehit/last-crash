import React, { Component } from 'react';
import './strava.css';

class Strava extends Component {
  render() {
    return (
      <div className="strava-wrap">
        <iframe height='405' width='590' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/activities/2155491428/embed/45947f5b73a2682b7c796a4c95b7adac3a290a1f'></iframe>
      </div>
    );
  }
}

export default Strava;