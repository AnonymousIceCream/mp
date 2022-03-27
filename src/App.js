import React, { useState } from "react";
import './App.css';

export default function App() {

  //to get 3 different random number 1 -100
  let randomizerA = Math.floor(Math.random() * 13) + 1;
  let randomizerB = Math.floor(Math.random() * 13) + 1;
  let randomizerC = Math.floor(Math.random() * 13) + 1;

  //const for start hidden
  const [start, setStart] = useState(true);

  //const hide is for the switching of deal/higher to newgame/reset
  const [hide, setHide] = useState(false);

  //const option is for switching of deal/nodeal to higher/lower
  const [option, setOption] = useState(false);

  //const choice for choices
  const [choice, setChoice] = useState("");

  //const for 3 numbers
  const [randomA, setRandomA] = useState(randomizerA);
  const [randomB, setRandomB] = useState(randomizerB);
  const [randomC, setRandomC] = useState(randomizerC);

  //const for rounds
  const [rounds, setRounds] = useState(0);
  //const for score
  const [score, setScore] = useState(0.0);
  //const for win/lose message
  const [msg, setMsg] = useState("");

  //startGame
  const startGame = () => {
    if(randomA === randomB){
      setOption(false);
    }
    else if(randomA !== randomB){
      setOption(true);
    };
    setStart(false);
  }

  const newGame = () => {
    
    setChoice("");
    setRandomA(randomizerA);
    setRandomB(randomizerB);
    setRandomC(randomizerC);
    setMsg("");
    setRounds(0);
    setHide(false);
    return(startGame);
  };

  const resetGame = () => {
    setChoice("");
    setScore(0);
    setRounds(0);
    setStart(true);
    setRandomA(randomizerA);
    setRandomB(randomizerB);
    setRandomC(randomizerC);
    setMsg("");
    setHide(false);
  }

  const higherChoice = () => {
    if(rounds === 5){
      setHide(true);
    }
    else {
      setChoice("HIGHER");
      let a = randomC;
      alert(a);   

      if(randomA < randomC){
        setMsg("YOU WIN! 3rd is Higher Than 1st");
        setScore(score+1);
        setRounds(rounds+1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      }
      else if(randomA > randomC){
        setMsg("YOU LOSE! 3rd is Lower Than 1st");
        setScore(score+1);
        setRounds(rounds+1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      };
    };
  };

  const lowerChoice = () => {
    if(rounds === 5){
      setHide(true);
    }
    else{
      setChoice("LOWER");
      let a = randomC;
      alert(a);
      
      if(randomA > randomC){
        setMsg("YOU WIN! 3rd is Higher Than 1st");
        setScore(score+1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      }
      else if(randomA < randomC){
        setMsg("YOU LOSE! 3rd is Lower Than 1st");
        setScore(score-1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      };
    }
  };

  const dealChoice = () => {
    if(rounds === 5){
      setHide(true);
    }
    else{
      setChoice("DEAL");
      let a = randomC;
      alert(a);
      if(randomA>randomC){
        if(randomB<randomC){
          setMsg("YOU WIN"+<br/>+"The 1st was Higher and 2nd was lower");
          setScore(score+1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setRounds(rounds+1);
          return startGame();
        }
        else if(randomB>randomC){
          setMsg("YOU LOSE"+<br/>+"The 1st and 2nd was higher");
          setScore(score-1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setRounds(rounds+1);
          return startGame();
        }
        else{
          setMsg("No Rules for this one");
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setRounds(rounds+1);
          return startGame();
        };
      }
      else if(randomA<randomC){
        if(randomB>randomC){
          setMsg("YOU Win");
          setScore(score+1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setMsg("The 1st was lower and 2nd was higher");
          setRounds(rounds+1);
          return startGame();
        }
        else if(randomB<randomC){
          setMsg("YOU LOSE");
          setScore(score-1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setMsg("The 1st and 2nd was lower");
          setRounds(rounds+1);
          return startGame();
        }
        else{
          setMsg("No Rules for this one");
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setRounds(rounds+1);
          return startGame();
        };
      }
      else{
        setMsg("No Rules for this one");
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      };
    }
    
  };

  const noDealChoice = () => {
    if(rounds === 5){
      setHide(true);
    }
    else {
      setChoice("NO DEAL");
      let a = randomC;
      alert(a);
      setScore(score-0.5);
      setRandomA(randomizerA);
      setRandomB(randomizerB);
      setRandomC(randomizerC);
      setRounds(rounds+1);
      return startGame();
    }
  };

  return (
    <div className="container">

      {start &&
        <button onClick={startGame} className="btnStart">Start</button>
      }
      <div className="higherlower-container" hidden={start}>
        <div className="mainbody">

          <div className="top">
            <div className="text-container">
              <h1>Numbers Game: Higher or Lower</h1>
            </div>
            <div className="text-container3">
              <h3>Mechanics</h3>
              <p>The player will be shown 2 numbers which ranges from 1 to 13.</p>
              <p>If they are equal, the player has to choose between Higher or Lower.</p>
              <p>The players wins if the third number is higher/lower than the first 2.</p>
              <p>If they are not equal, the player has to choose between Deal or No Deal. </p>
              <p>When the player chooses Deal, they win if the 3rd number is in between the 1st and 2nd. 
                Else, they lose a point. If the player chooses No Deal, they lose half a point.</p>
            </div>
          </div>

          <div className="bot">
            {/* div for choices */}
            <div className="left">


              <div className="left-controls" hidden={hide}>

                <div className="text-container2"><p>The numbers are <u>{randomA}</u> and <u>{randomB}</u></p></div>
                <div className="left-controls-buttons">
                  <button hidden = {option} onClick = {higherChoice} className="btn">Higher</button>
                  <button hidden = {option} onClick = {lowerChoice} className="btn">Lower</button>
                </div>
                {option &&
                  <div className="left-controls-buttons">
                    <button onClick = {dealChoice} className="btn">Deal</button>
                    <button onClick = {noDealChoice} className="btn">No Deal</button>
                  </div>
                }
              </div>

              
              {hide &&
              <div className="left-controls">
                  <div className="text-container2"><p>Continue or Restart?</p></div>
                  <div className="left-controls-buttons">
                    <button onClick={newGame} className="btn">Continue?</button>
                    <button onClick={resetGame} className="btn">⟳</button>
                  </div>
               </div> 
              }
              

            </div>

            <div className="mid"></div>
            
            <div className="right">
            <div hidden = {hide} className="text-container2"><p>Make Your Choice</p></div>
              
              {hide &&
                <div className="text-container2"><p>
                  Your choice was {choice}.<br/>
                  The 3rd Number was {randomC}.<br/>
                  {msg}  
                </p></div>
              }

              <div className="score">
                <p>Score: {score}</p>
                <p>Rounds: {rounds}</p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
