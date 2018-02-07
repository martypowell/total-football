import React, { Component } from "react";
import "./standings-row-header.css";

class Standings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortInfo: {
        direction: '',
        targetColumnName: '',
      }
    };

    this.handleColumnClick = this.handleColumnClick.bind(this);
  }

  getSortDirection(targetColumnName) {
    const sortDirection = this.state.sortInfo.direction;
    const isNewTargetColumn = this.state.sortInfo.targetColumnName !== targetColumnName;

    if (!isNewTargetColumn) {
      switch(sortDirection) {
        case 'asc':
          return 'desc';
        case 'desc':
          return '';
        default:
          return 'asc';
      }
    }
    return 'asc';
  }

  handleColumnClick(clickEvent) {
    const sortInfo = Object.assign({}, this.state.sortInfo);
    const targetColumnName = clickEvent.target.textContent;

    sortInfo.targetColumnName = targetColumnName;
    sortInfo.direction = this.getSortDirection(targetColumnName);

    this.setState({
      sortInfo
    });

    this.props.onHeaderColumnClick(sortInfo);
  }

  render() {
    return (
      <div className="standings-row standings-row-header">
        <p className="team" 
          onClick={this.handleColumnClick}>Team</p>
        <p className="points" 
          onClick={this.handleColumnClick}>Points</p>
        <p className="wins" 
          onClick={this.handleColumnClick}>Wins</p>
        <p className="losses" 
          onClick={this.handleColumnClick}>Losses</p>
        <p className="draws" 
          onClick={this.handleColumnClick}>Draws</p>
        <p className="goal-differential" 
          onClick={this.handleColumnClick}>Goal Differential</p>
      </div>
    );
  }
}

export default Standings;
