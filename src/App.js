import React, { Component } from 'react';
import Strava from './strava';
import './App.css';
import TimeDisplay from './time-display';
import Images from './images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="https://www.gravatar.com/avatar/0f879f3ea09c6e40a566f1a06f760c3c"/>
          <div className="floater">
            <i>Nick last crashed...</i>
          </div>
          <iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/803880/activity-summary/63119c16f273d385e23041a35d4b09de83926ed0'></iframe>
        </header>
        <Strava />
        <Images />
        <footer className="App-footer">
          <TimeDisplay />
        </footer>
      </div>
    );
  }
}

export default App;
