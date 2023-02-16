import { useState, useEffect } from "react";
import { MDBCard,MDBCardBody,MDBListGroup, MDBListGroupItem, MDBModalBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./User.css"

function Landing(props) {
  const [gameData, setGameData] = useState([]);
  const [upcomingGameData, setUpcomingGameData] = useState([]);

  const grabData = () => {
    fetch("/api/game")
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
    <MDBModalBody className="MDBListGroupItemStyling divider">
      <MDBListGroup>
        <MDBListGroupItem className="biggerText">Hello Game Loggers</MDBListGroupItem>
        <MDBListGroupItem className="biggerText">2022 Top Games!</MDBListGroupItem>
        <MDBListGroupItem className="biggerText">Upcoming Releases for 2023</MDBListGroupItem>
      </MDBListGroup>

      <MDBCardBody>
        <MDBCard className="landingPage">
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
          <img src={"public\asssets\images\bowserColladge.webp"} className="landingContainerSS"></img>
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
        </MDBCard>
        <MDBCard>
          <div className="centerText ">
            <div>
              <h1 className="biggestText">2022 Games of the Year</h1>
              <div className="game-container ">
                {gameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                        <Link to={`/game/${game.name}`} state={{ game: game }}>
                          <img style={{divStyle}} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MDBCard>
        <MDBCard>
          <div className="centerText ">
            <div>
              <h1 className="biggestText">2023 Releases</h1>
              <div className="game-container ">
                {upcomingGameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                        <Link to={`/game/${game.name}`} state={{ game: game }}>
                          <img style={{divStyle}} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MDBCard>
      </MDBCardBody>
    </MDBModalBody>
  );
}

export default Landing;