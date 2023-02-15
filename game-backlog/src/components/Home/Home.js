import React from 'react';
import Results from '../../page/results'
import { useState } from 'react';
import { MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';


function Home (props) {
    const [search, setSearch] = useState("")
    const [gameResults, setGameResults] = useState([])


const handleChange = (event) => {
    setSearch(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault()
    let searchedGame = search.split(' ').join('-').toLowerCase()

    setGameResults( [] )
    console.log("about to fetch ")
    fetch(`https://api.rawg.io/api/games?key=167215f1e55b4cbf9f2d6c076ecf3f6e&search=${searchedGame}`)
    .then(res => res.json())
    .then(({results}) => {
       var error = results === undefined ? alert('no games found') : setGameResults(results)
        console.log(error)
        // results will be sent as a prop to the Results.js in the pages folder.
    })
    setSearch("")
}

    return (
        <div className='game-search'>
            <h1 className='biggestText'>Game Search</h1>
            <form onSubmit={onSubmit}>
            <input type="text" value={search} onChange={handleChange}/>
                <br></br>

              <MDBBtn><MDBNavbarLink href='/mygames' className='text-white'>Submit </MDBNavbarLink></MDBBtn>  

            </form>

            <Results gameResults = {gameResults}/>
        </div>
    );
}


export default Home; 

