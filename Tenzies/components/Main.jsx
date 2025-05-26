import "./Main.css";
import Buttons from "./Buttons";
import React from 'react';


const Main = () => {
  return (
    <main>
      <div className="container-parent"> 
        <div className="container">
          <div className="sub-container">
            <div className="sub-text">
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
              <Buttons/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

