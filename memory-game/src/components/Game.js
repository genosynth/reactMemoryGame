import React, { useState, useEffect } from "react";
import batman from "../images/batman.png";
import alfred from "../images/alfred.png";
import joker from "../images/joker.png";
import batgirl from "../images/batgirl.png";
import bullock from "../images/bullock.png";
import croc from "../images/croc.png";
import freeze from "../images/freeze.png";
import ivy from "../images/ivy.png";
import penguin from "../images/penguin.png";
import quinn from "../images/quinn.png";
import riddler from "../images/riddler.png";
import robin from "../images/robin.png";
import scarecrow from "../images/scarecrow.png";
import twoface from "../images/twoface.png";
import wayne from "../images/wayne.png";
import scarface from "../images/scarface.png";

function Game() {
  const [deck, setDeck] = useState([
    batman,
    alfred,
    joker,
    batgirl,
    bullock,
    croc,
    freeze,
    ivy,
    penguin,
    quinn,
    riddler,
    robin,
    scarecrow,
    twoface,
    wayne,
    scarface,
  ]);

  const [score, setScore] = useState(-1)
  const [choices, setChoices] = useState([])
  const [start, setStart] = useState(new Date())
  const [highScore, setHighScore] = useState(0)
  const [lost, setLost] = useState(false)
  const [style, setStyle] = useState({visibility:"hidden"})
  const [lastScore, setLastScore] = useState(0)
 

  function shuffleDeck() {
    let array = [
      batman,
      alfred,
      joker,
      batgirl,
      bullock,
      croc,
      freeze,
      ivy,
      penguin,
      quinn,
      riddler,
      robin,
      scarecrow,
      twoface,
      wayne,
      scarface,
    ];
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
    shuffleArray(array);
    setDeck(array);
  }

  function play(e){
    setChoices([...choices,e.target.src])
    console.log("choices = " + choices)
    
    
      //console.log(choices)
      //console.log(score)
  }

  function checkHighScore(points){
    if (points>highScore){
      setHighScore(points)
    }

  }

  function resetDeck(){
    setDeck(([
      batman,
      alfred,
      joker,
      batgirl,
      bullock,
      croc,
      freeze,
      ivy,
      penguin,
      quinn,
      riddler,
      robin,
      scarecrow,
      twoface,
      wayne,
      scarface,
    ]))

    
  }

  useEffect(() => {
    const toFindDuplicates = choices => choices.filter((item, index) => choices.indexOf(item) !== index)
     const duplicateElements = toFindDuplicates(choices);
    console.log("duplicateElements = "+duplicateElements);
    if (duplicateElements.length===0){
       setScore(score+1)
       
    } else {
      setChoices([])
      setScore(score-1)
      setLost(true)
      setLastScore(score)
      //alert("You Loose!")
      

    }
  
},[choices]);

useEffect(()=>{
  if (score===16 || lost===true){
    /* let end = new Date()

    let time = (end - start)/1000
    time = Math.floor(time)
    let points = time */
    let points = score
    //alert(points)
    checkHighScore(lastScore)
    //setScore(0)
    //setLost(false)
    
    setStyle({visibility:"visible"})
    setDeck([])
    
    setScore(0)

  }


},[score])



  
  return (
    <div className="box">
      <div style={style}className="result">
       {lastScore}<br/> Points
        <p onClick={()=>{
          resetDeck()
          setStyle({visibility:"hidden"})
          }}>Play Again</p>
      </div>
       <ul>
          <li>Current Score</li>
          <li>{score}</li>
          <li>Best Score</li>
          <li>{highScore}</li>
        </ul>
      
      <div className="game-container">
    
        {deck.map((el) => {
          return (
            <div key={el}>
              
            <img
              
              src={el}
              alt={el}
              onClick={(e) => {
                if (lost===true){
                  setScore(0)
                  setLost(false)
                  setStyle({visibility:"hidden"})
                  setDeck([])
                }
                //console.log(e.target.src)
                play(e)
                shuffleDeck();
              }}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
