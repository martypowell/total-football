import React from "react";
import ReactDOM from "react-dom";
import StandingsRow from "./StandingsRow";

const mockStateStanding = {
  id: 1,
  team: "Arsenal",
  wins: 10,
  losses: 10,
  draws: 10,
  goalsFor: 100,
  goalsAgainst: 87
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StandingsRow data={mockStateStanding} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
