import { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBModalBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Langingp.css"
import Users from "./User"

function Landing(props) {
  const [gameData, setGameData] = useState([]);
  const [upcomingGameData, setUpcomingGameData] = useState([]);

  // const grabData = () => {
  //   fetch("/api/games")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGameData(data.results);
  //       console.log(data.results);
  //     });
  // };

  // const grabUpcomingGames = () => {
  //   fetch("/api/upcoming-releases")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUpcomingGameData(data.results);
  //       console.log(data.results);
  //     });
  // };

  // useEffect(grabData, []);
  // useEffect(grabUpcomingGames, []);

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
        <div className="card-fixer">
          <MDBCard className="landingPage">
            <div className="">
              <h1 className="biggestText divider ">
                Tired of adding all of your friend's usernames? Gamelog is here for you
              </h1>
              <h1 className="biggerText">
                With this app you can signup and view all of your
                favorite games' information and save them in your Profile
                library. You can also view users and their user profile to add them on
                any platform you wish.
              </h1>
            </div>
            <Users></Users>
            <MDBCard>
              <div className="game-card-img">
                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg' position='top' alt='...' />
              </div>
              <MDBCardBody>
                <h2>Call of Duty Modern Warfare 2 (2022)</h2>
                <p>
                  Call of Duty: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.
                </p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <div className="game-card-img">
                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/42700/header.jpg' position='top' alt='...' />
              </div>
              <MDBCardBody>
                <h2>Call of Duty: Black Ops</h2>
                <p>
                The biggest first-person action series of all time and the follow-up to critically acclaimed Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops.
                </p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <div className="game-card-img">
                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/2630/header.jpg' position='top' alt='...' />
              </div>
              <MDBCardBody>
                <h2>Call of Duty 2</h2>
                <p>
                Call of Duty® 2 redefines the cinematic intensity and chaos of battle as seen through the eyes of ordinary soldiers fighting together in epic WWII conflicts. The sequel to 2003's Call of Duty, winner of over 80 Game of the Year awards, Call of Duty 2 offers more immense, more intense, more realistic battles than ever before, thanks to...
                </p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <div className="game-card-img">
                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/393080/header.jpg' position='top' alt='...' />
              </div>
              <MDBCardBody>
                <h2>Call of Duty®: Modern Warfare Remastered</h2>
                <p>
                One of the most critically-acclaimed games in history, Call of Duty: Modern Warfare is back, remastered in true high-definition, featuring improved textures, physically based rendering, high-dynamic range lighting and much more.
                </p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <div className="game-card-img">
                <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/10180/header.jpg' position='top' alt='...' />
              </div>
              <MDBCardBody>
                <h2>Call of Duty®: Modern Warfare 2 (2009)</h2>
                <p>
                The most-anticipated game of the year and the sequel to the best-selling first-person action game of all time, Modern Warfare 2 continues the gripping and heart-racing action as players face off against a new threat dedicated to bringing the world to the brink of collapse.
                </p>
              </MDBCardBody>
            </MDBCard>
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
        </div>
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
                          <img style={{ divStyle }} src={game.background_image} />
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
                          <img style={{ divStyle }} src={game.background_image} />
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