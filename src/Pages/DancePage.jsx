import React from "react";
import "./DefaultPagestyle.css";
import PlayerDance from "../components/PlayerDance";
import IconDance from "../images/dancing.png";
import ButtonMood from "../components/ButtonMood";
import Progressbar from "../components/Progressbar";
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

      <div className="footer-div">
        <Progressbar value="3" />

        <ButtonMood />
      </div>
    </div>
  );
}

export default Dance;
