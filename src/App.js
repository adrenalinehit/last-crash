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
          Welcome to <i>Nick last crashed...</i>
        </header>
        <Strava />
        <Images/>
        <footer className="App-footer">
          <TimeDisplay/>
        </footer>
      </div>
    );
  }
}

export default App;
