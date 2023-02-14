import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "react";
import gameScreenshot from "../../App"
import { Link } from "react";

function Landing(props) {
  const [gameData, setGameData] = useState([]);
  const [upcomingGameData, setUpcomingGameData] = useState([]);

  const grabData = () => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data.results);
        console.log(data.results);
      });
  };

  const grabUpcomingGames = () => {
    fetch("/api/upcoming-releases")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingGameData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  useEffect(grabUpcomingGames, []);

  const divStyle = {
    height: "250px",
    width: "400px",
  };
  return (
    <Tabs className="tabStyling divider">
      <TabList>
        <Tab className="biggerText">Hello Game Loggers</Tab>
        <Tab className="biggerText">2022 Top Games!</Tab>
        <Tab className="biggerText">Upcoming Releases for 2023</Tab>
      </TabList>

      <TabPanels>
        <TabPanel className="landingPage">
          <div className="landingContainer">
            <h1 className="biggestText divider">
              Tired of adding all of your friend's usernames? Gamelog is here for you
        
            </h1>
            <h1 className="biggerText">
              With this app you can signup and view all of your
              favorite games' information and save them in your Profile
              library. You can also view users and their user profile to add them on
              any platform you wish.
            </h1>
          </div>
          <img src="" className="landingContainerSS"></img>
          <div className="apiContainer">
            <h1 className="biggestText">
              With RAWG API, you can see game data and ratings, plus
            </h1>
            <h1 className="biggerText">
              The latest Releases for all platforms, and genres
            </h1>
            <h1 className="biggerText">
              Add  your gaming platform usernames to share with your
              friends all-in-one place
            </h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="centerText ">
            <div>
              <h1 className="biggestText">2022 Games of the Year</h1>
              <div className="game-container ">
                {gameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                        <Link to={`/game/${game.name}`} state={{ game: game }}>
                          <img style={divStyle} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="centerText ">
            <div>
              <h1 className="biggestText">2023 Releases</h1>
              <div className="game-container ">
                {upcomingGameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                        <Link to={`/game/${game.name}`} state={{ game: game }}>
                          <img style={divStyle} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Landing;