import React, { Component } from 'react';
import StandingsRow from '../standings/StandingsRow';
import './standings.css';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [
        {
          id: 1,
          team: 'Arsenal',
          wins: 10,
          losses: 10,
          draws: 10,
          goalsFor: 100,
          goalsAgainst: 87,
        },
        {
          id: 2,
          team: 'Manchester City',
          wins: 100,
          losses: 100,
          draws: 100,
          goalsFor: 200,
          goalsAgainst: 192,
        },
        {
          id: 3,
          team: 'Manchester United',
          wins: 2,
          losses: 2,
          draws: 2,
          goalsFor: 50,
          goalsAgainst: 75,
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="standings">
        {this.state.standings.map((standing, index) => {
          return <StandingsRow 
                    key={standing.id}
                    data={standing} />;
        })}
      </div>
    );
  }
}

export default Standings;
