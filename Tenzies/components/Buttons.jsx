import { useState, useEffect } from "react";
import "./Buttons.css";
import React from "react";
import Die from "./Die";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const generateAllNewDice = () => {
  return new Array(10).fill(0).map((_, i) => ({
    id: i,
    val: Math.ceil(Math.random() * 6),
    isheld: false,
  }));
};

const Buttons = () => {
  const [number, setNumber] = useState(() => generateAllNewDice());

  const GameWon = number.every(die => die.isheld )  && number.every(die => die.val === number[0].val ) 

  const handleRoll = () => {
    if (GameWon){
        setNumber(() =>generateAllNewDice())
    }else{
    setNumber((oldDieVal) =>
      oldDieVal.map((die) =>
        die.isheld ? die : { ...die, val: Math.ceil(Math.random() * 6) }
      )
    );
}
  };

  const hold = (id) => {
    setNumber((oldVal) => {
      return oldVal.map((die) => {
        return die.id === id ? { ...die, isheld: !die.isheld } : die;
      });
    });
  };

  const dieElement = number.map((dieObj) => (
    <Die
      key={dieObj.id}
      val={dieObj.val}
      isheld={dieObj.isheld}
      hold={() => hold(dieObj.id)}
    />
  ));



  return (
    <>
      {GameWon ? <Confetti />: null}
      <div className="inner-box">
        <div className="btns">{dieElement}</div>
      </div>
      <button onClick={handleRoll} className="roll-btn">
        {GameWon ? "New Game" : "Roll"}
      </button>
    </>
  );
};

export default Buttons;
