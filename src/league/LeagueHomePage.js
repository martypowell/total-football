import React, { Component } from 'react';
import './league.css';

class LeagueHomePage extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="page page--league">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default LeagueHomePage;
