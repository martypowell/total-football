import React, { Component } from "react";
import "./standings-row.css";

class StandingsRow extends Component {
  

  render() {
    const { data } = this.props;
    return (
      <div className="standings-row">
        <p className="team">{data.team}</p>
        <p className="points">{data.points}</p>
        <p className="wins">{data.wins}</p>
        <p className="losses">{data.wins}</p>
        <p className="draws">{data.wins}</p>
        <p className="">{data.goalDifferential}</p>
      </div>
    );
  }
}

export default StandingsRow;
