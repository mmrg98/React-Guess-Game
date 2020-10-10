import React, { useState } from "react";
import Result from './Components/Result'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import styles from "./styles";
//import GuessTheNumber from "./Test"

function App() {
  /*
  const [guess, setGuess] = useState(null); 
  const [random, setrandom] = useState(Math.floor(Math.random() * 10));
  
  const handleChange = event => {
    setGuess(event.target.value);
  }
  */

  /*<Result 
          random={random}
          guess={guess}
        /> */
  return (
    <div>
      <Result/>
   </div>
  );

}

export default App;


 /*
    <div style={styles.div}> your guess : 
      <input type="text" onChange={handleChange} />
      <button
            className="btn btn-danger mb-3"
            onClick={() => {
              setGuess(null);
              setrandom(Math.floor(Math.random() * 10));
            }}
          >
            Reset
          </button>
      <Result 
          random={random}
          guess={guess}
        /> 
    </div>
    */
