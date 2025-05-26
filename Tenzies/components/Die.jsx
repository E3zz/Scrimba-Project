import React from "react";
import "./Buttons.css";

const Die = (props) => {
  return (
    <>
      <div
        onClick={() => props.hold(props.id)}
        key={props.id}
        className="play-btn"
        style={{
          background: props.isheld ? "#59E391" : "white",
        }}
      >
        {props.val}
      </div>
    </>
  );
};

export default Die;
