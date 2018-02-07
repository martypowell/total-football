import React, { Component } from 'react';
import LeagueHomePage from './league/LeagueHomePage';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LeagueHomePage 
          name="Premier League" />
      </div>
    );
  }
}

export default App;
