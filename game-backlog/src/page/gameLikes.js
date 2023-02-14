import { ADD_GAME } from "../utils/transForm"
import {useState} from 'react';
import { useMutation } from "mongodb"
import { useNavigate } from 'react-router-dom';
import { PROFILE_QUERY } from "../utils/query";


function GameForm(props) {
    console.log("game likes is a thing");
    console.log(props);
    const [formInput, setFormInput] = useState("");
    const [addGame, {loading, error, data}] = useMutation(ADD_GAME)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addGame({
            variables: {
                game: formInput,
                user: props._id
            },
            refetchQueries: [PROFILE_QUERY]
        })
        setFormInput('')
        navigate('/profile')
    };

  return (
    <form className="" onSubmit={handleSubmit}>
        <h1 className="whiteText biggestText">Add Game to your Collection</h1>
      <input className="profInput"
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        type="text"
        placeholder="Add game to your library"/>
        <button className="biggerText btnStyle">Submit</button>
    </form>
  );
}

export default gameLikes    