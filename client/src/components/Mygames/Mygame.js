import React from 'react';  
     
function App() {  
     

    //array of users saved games
  const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
    
  return (  
    <div className="container">     
        <h1> My Games </h1>  
     
        {myArray.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}  
     
    </div>  
  );  
}  
     
export default App;  