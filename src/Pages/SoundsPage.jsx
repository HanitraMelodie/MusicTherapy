import ButtonMood from "../components/ButtonMood";
import React from "react";
import "./DefaultPagestyle.css";
import Icon_dance from "../images/icon_tree.png";
import PlayerNaturalSounds from "../components/PlayerNaturalSounds";
import Progressbar from "../components/Progressbar";
function Sounds() {
  return (
    <div id="NaturalSounds-Page">
      <div className="Question-header">
        <img
          id="icon"
          src={Icon_dance}
          alt=" A tree representing nature and the sounds of nature"
        />
        <h1>Select a sound, close your eyes and listen </h1>
      </div>
      <div className="selection-div">
        <PlayerNaturalSounds />
      </div>

      <div className="footer-div">
        <Progressbar value="3" />

        <ButtonMood />
      </div>
    </div>
  );
}

export default Sounds;
