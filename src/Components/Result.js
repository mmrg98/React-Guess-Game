import React, { useState } from "react";
import styles from "../styles";

const Result = () => {
  const [guess, setGuess] = useState(null);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(Math.floor(Math.random() * 10));
  
  
  const onClick = () => {
    
    if(count<3){
    if (guess === random){
    setResult(<p>Correct 🎉👏🏻</p>);
  }
    else if (guess > random){
    
    setResult(<p>❌ Guess lower </p>);
    setCount(count+1)
    }
    else if (guess < random){

      setResult(<p>❌ Guess higher</p>);
      setCount(count+1)
      }
}
else{
  if (guess === random){
    setResult(<p>Correct 🎉👏🏻</p>);
  }
  else{
setResult(<p>Game Over. the number was: {random}</p>);
  }
}
  }
  if (random===null) return <Result/>;
  return(
    <div style={styles.div}>
    <h2>Guess a number between 1 and 10 🧐</h2>
    <input
        //value={guess}
        type="number"
        onChange={e => setGuess(parseInt(e.target.value))}
      />

<button className="btn btn-info mb-3" type="submit" onClick={onClick}>
        Guess
      </button>
      {result}

      <button
            className="btn btn-danger mb-3"
            onClick={() => {
              setCount(0)
              setGuess(null);
              setRandom(null);
            }}
          >
            Reset
          </button>
      </div>

      
  )
    /*if(guess){
      while (count<4){}
      if (parseInt(guess) === random)
        return "True 🎉👏🏻";
      return  `Flase, the number was ${random}`;
    }
    return "";
  };*/
  }
export default Result