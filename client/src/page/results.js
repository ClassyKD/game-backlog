import React from "react";
import {Link} from "react"


function Results (props) {
  console.log(props.gameResults);
  return (
    <div className="results-container">
      {props.gameResults.map((game) => (
        <div key={game.id} className="searchedGames">
               <Link
                to= {`/game/${game.name}`}
                state = {{game: game}}
              >
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game" className="gameScreenshots"/>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Results;