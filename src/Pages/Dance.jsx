import React from "react";
import "./Dance.css";
import PlayerDance from "../components/PlayerDance";
import IconDance from "../images/dancing.png";
import ButtonMood from "../components/ButtonMood";

function Dance() {
  return (
    <div id="Dance-Page">
      <div className="Question-header">
        <img id="icon" src={IconDance} alt="A sillhouette of a girl dancing" />
        <h1>Select and dance along</h1>
      </div>
      <div className="selection-div">
        <PlayerDance />
      </div>
      <div id="progressbar">
        <progress value="60" max="100" /> <span>3/5</span>
      </div>
      <div className="footer-div">
        <ButtonMood />
      </div>
    </div>
  );
}

export default Dance;
