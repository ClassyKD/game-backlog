import { useState, useEffect } from "react";

function Game () {
  const [gameData, setGameData] = useState([]);

  const grabData = () => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  const divStyle = {
    height: "200px",
    width: "300px",
  };
  return (
    <div>
      <h1>Games of the year</h1>
      <div className="game-container">
        {gameData.map((game, index) => {
          return (
            <div key={index}>
              <div className="game-card">
                <img style={divStyle} src={game.background_image}></img>
                <p>{game.name}</p>
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;