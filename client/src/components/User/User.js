import { PROFILE_QUERY } from '../../utils/queries';
import { useQuery } from "@apollo/client"

function Users() {
    const { loading, data } = useQuery(PROFILE_QUERY)

    return(
        <div className="">

            {loading && <p>Loading user profiles.</p>}


            {data && (
                <span className='game-container'>
                        
                            <div className="game-card">
                                <h3>User Email: {data.user.username}</h3>
                                {data.user.games.map(game => (
                                    <div>
                                    <p>{game.gameName}</p>
                                    <img src={game.gameImg}/>
                                    </div>
                                ))}
                            </div>
                        
                </span>
            )}
        </div>
  )
}

export default Users;