import React, { Component } from 'react';
import StandingsRowHeader from '../standings/StandingsRowHeader';
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
          points: 40, // this needs to be calculated on the server
          goalDifferential: 13, // this needs to be calculated on the server
        },
        {
          id: 2,
          team: 'Manchester City',
          wins: 10,
          losses: 100,
          draws: 10,
          goalsFor: 200,
          goalsAgainst: 192,
          points: 40, // this needs to be calculated on the server
          goalDifferential: 8, // this needs to be calculated on the server
        },
        {
          id: 3,
          team: 'Manchester United',
          wins: 2,
          losses: 2,
          draws: 2,
          goalsFor: 50,
          goalsAgainst: 75,
          points: 8, // this needs to be calculated on the server
          goalDifferential: -25, // this needs to be calculated on the server
        }
      ]
    }

    this.state.sortedStandings = this.state.standings;

    this.handleHeaderColumnClick = this.handleHeaderColumnClick.bind(this);
  }

  handleHeaderColumnClick(sortInfo) {
    const { targetColumnName, direction } = sortInfo;
    this.sortStandings(targetColumnName, direction);
  }

  sortStandings(property, direction) {
    if (!direction) {
      const originalStandings = Object.assign({}, this.state.standings);
      this.setState({
        sortedStandings: originalStandings
      });
    }

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const getPropertyNameFromColumnText = (columnText) => {
      if (!columnText) return console.error('you did not pass in a column name');
      const words = columnText.split(" ");

      const newWords = words.map((word, index) => {
        if (index === 0) return word.toLowerCase();
        return capitalizeFirstLetter(word.trim());
      });

      return newWords.join('');
    }

    const sortedStandings = this.state.standings.sort((a, b) => {
      const formattedProperty = getPropertyNameFromColumnText(property);
      if (direction === 'asc') {
        return a[formattedProperty] > b[formattedProperty];  
      }
      return a[formattedProperty] < b[formattedProperty]; // 'dsc'
    });

    this.setState({
      sortedStandings,
    });
  }
  
  render() {
    return (
      <div className="standings">
        <StandingsRowHeader 
          onHeaderColumnClick={this.handleHeaderColumnClick} />
        {this.state.sortedStandings.map((standing, index) => {
          return <StandingsRow 
                    key={standing.id}
                    data={standing} />;
        })}
      </div>
    );
  }
}

export default Standings;
