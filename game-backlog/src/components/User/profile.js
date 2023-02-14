import { PROFILE_QUERY } from "../utils/query";

import GameLikes from "../page/gameLikes.js"

function Profile() {
  const { getUsers } = useQuery(PROFILE_QUERY);
  // const { getUsers, email, gamerTag } = useQuery(PROFILE_QUERY);
  let userInfo = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return (
    <div className="centerProf">
      <div>
        {error && <p className="error">{error.message}</p>}

        {loading && <p>Loading user profile...</p>}

        {data && (
          <span className="profContainer">
            {data.getUsers.map((user, index) => {
              if (userInfo.email === user.email) {
                let userLib = user.library;
                console.log(userLib);
                return (
                  <div key={index}>
                    <div>
                      <h3 className="whiteText biggerText">GamerTag: {user.gamerTag}</h3>
                      <h3 className="whiteText biggerText">Preferred Console: {user.faveConsole}</h3>
                      <div className="gameList whiteText biggerText"> Favorite Games: 
                        {user.library.map((game, index) => {
                          return (
                            <div key={index} className="profileContainer">
                              <h1 className="whiteText biggerText">{game.game}</h1>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <GameLikes {...user} />
                  </div>
                );
              }
            })}
          </span>
        )}
      </div>
      <div></div>
    </div>
  );
}
export default Profile;