import React, { Component } from 'react';
import Standings from '../shared/standings/Standings';
import './team.css';

class Team extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="team">
        /* Logo */
        /* Colors */
        <h1>{name}</h1>
        /* Upcoming matches, recents results */
        /* Place in their main league, but this could be multiple leagues, standings? */
        /* Cup/Tournament Info info */
        /* Leading Goal Scorer */
        /* Assists */
        /* Goal Keeping */
        /* Gamecast if game is on */
      </div>
    );
  }
}

export default Team;
