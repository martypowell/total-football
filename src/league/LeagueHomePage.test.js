import React from 'react';
import ReactDOM from 'react-dom';
import LeagueHomePage from './LeagueHomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeagueHomePage name="Premier League"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});