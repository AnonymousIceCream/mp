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

  // ito sana kaso nadedelay pagran kay calc
  // const choiceTaken = (value) => {
  //   setChoice(value);
  //   calc();
  // };

  // const calc = () => {
  //   if(rounds !== 5){
  //     if(choice === "Deal"){
  //       setRounds(rounds + 1);
  //     }
  //     else if(choice === "Higher"){
  //       setRounds(rounds + 1);
  //     }
  //     else if(choice === "Lower"){
  //       setRounds(rounds + 1);
  //     }
  //     else if(choice === "No Deal"){
  //       setRounds(rounds + 1);
  //     }
  //   }
  //   else if(rounds === 5){
  //     setHide(true);
  //   };
  // }

  const higherChoice = () => {
    if(rounds === 5){
      setHide(true);
    }
    else {
      setChoice("HIGHER");
      let a = randomC;
      alert(a);   

      if(randomA < randomC){
        setMsg("YOU WIN! Third is Greater Than First");
        setScore(score+1);
        setRounds(rounds+1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      }
      else if(randomA > randomC){
        setMsg("YOU LOSE! Third is LOWER Than First");
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
        setMsg("YOU WIN! Third is Greater Than First");
        setScore(score+1);
        setRandomA(randomizerA);
        setRandomB(randomizerB);
        setRandomC(randomizerC);
        setRounds(rounds+1);
        return startGame();
      }
      else if(randomA < randomC){
        setMsg("YOULOSE! Third is LOWER Than First");
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
          setMsg("YOU WIN MTFCKR"+<br/>+"1st was greater and 2nd was lower");
          setScore(score+1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setRounds(rounds+1);
          return startGame();
        }
        else if(randomB>randomC){
          setMsg("YOU LOSE MTFCKR"+<br/>+"1st and 2nd was greater");
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
          setMsg("YOU Win MTFCKR");
          setScore(score+1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setMsg("1st was lower and 2nd was greater");
          setRounds(rounds+1);
          return startGame();
        }
        else if(randomB<randomC){
          setMsg("YOU LOSE MTFCKR");
          setScore(score-1);
          setRandomA(randomizerA);
          setRandomB(randomizerB);
          setRandomC(randomizerC);
          setMsg("1st and 2nd was lower");
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
    <div>

      {start &&
      <button onClick={startGame}>Start</button>
      }
      <div hidden={start}>
        <div className="mainbody">

          <div className="top">
            <h1><span>Numbers Game: Higher or Lower</span></h1>
            <h3>Mechanics</h3>
            <h5>
              The player will be shown 2 numbers which ranges from 1 to 13.<br/>
              If they are equal, the player has to choose between Higher or<br/>
              Lower. The players wins if the third number is higher/lower than the first 2.<br/>
              If they are not equal, the player has to choose between Deal or No Deal. The <br/>
              When the player chooses Deal, they win if the third number is in between the first<br/>
              and second. Else, they lose a point. If the player chooses No Deal, they lose half a point.
            </h5>
          </div>

          <div className="bot">
            {/* div for choices */}
            <div className="left">


              <div hidden={hide}>

                <p><span>The numbers are <u>{randomA}</u> and <u>{randomB}</u></span></p>
                
                <button hidden = {option} onClick = {higherChoice} className="btn">Higher</button>
                <button hidden = {option} onClick = {lowerChoice} className="btn">Lower</button>

                {option &&
                  <div>
                    <button onClick = {dealChoice} className="btn">Deal</button>
                    <button onClick = {noDealChoice} className="btn">No Deal</button>
                  </div>
                }
              </div>

              {hide &&
                <div>
                  <button className="btn2">New Game</button>
                  <button className="btn2">⟳</button>
                </div>
              }

            </div>

            <div className="mid"></div>
            
            <div className="right">
              <p hidden = {hide}><span>Make Your Choice </span></p>
              
              {hide &&
                <div className="inright"><p>
                  Your choice was {choice}.<br/>
                  The 3rd Random Number was {randomC}.<br/>
                  {msg}<br/>  
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
