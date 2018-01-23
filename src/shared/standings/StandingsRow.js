import React, { Component } from "react";
import "./standings-row.css";

class StandingsRow extends Component {
  calculateGoalDifferential() {
    const { goalsFor, goalsAgainst } = this.props.data;
    return goalsFor - goalsAgainst;
  }

  calculatePoints() {
    const { wins, draws } = this.props.data;
    return wins * 3 + draws;
  }

  render() {
    const { data } = this.props;
    return (
      <div className="standings-row">
        <h3>{data.team}</h3>
        <p>Wins: {data.wins}</p>
        <p>Losses: {data.wins}</p>
        <p>Draws: {data.wins}</p>
        <p>Points: {this.calculatePoints()}</p>
        <p>Goal Differential: {this.calculateGoalDifferential()}</p>
      </div>
    );
  }
}

export default StandingsRow;
