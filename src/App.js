import React from "react";
import Game from "../src/components/game/Game";
import "./App.css";

/* ----- Importing Images  ----- */

import dreamTeam from "../src/assets/images/dreamTeam.png";
import chennaiSmashers from "../src/assets/images/chennaiSmashers.png";
import premierTm from "../src/assets/images/premier.png";
import slu from "../src/assets/images/slu.png";

/* ---- Stateless Function ---- */

function App(props) {
  const smashers = {
    name: "The Chennai Smashers",
    logoSrc: chennaiSmashers,
  };

  const dreamTm = {
    name: "The Dream Team",
    logoSrc: dreamTeam,
  };

  const premier = {
    name: "Premier Badminton League",
    logoSrc: premierTm,
  };

  const stLaure = {
    name: "St. Laurence's United",
    logoSrc: slu,
  };
  return (
    <div className="App">
      <br></br>
      <Game
        venue="The Dream Ground, Ring Road"
        homeTeam={dreamTm}
        visitingTeam={smashers}
      />
      <br></br>
      <Game
        venue="Elite Sports Club, Badminton &amp; Cricket Academy"
        homeTeam={premier}
        visitingTeam={stLaure}
      />
    </div>
  );
}

export default App;
