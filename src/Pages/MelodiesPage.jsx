import ButtonMood from "../components/ButtonMood";
import React from "react";
import "./DefaultPagestyle.css";
import icon_music from "../images/icon_music-notes.png";
import PlayerMelodies from "../components/PlayerMelodies";
import Progressbar from "../components/Progressbar";
function Melodies() {
  return (
    <div id="Melodies-Page">
      <div className="Question-header">
        <img
          id="icon"
          src={icon_music}
          alt="A music note representing compositioned sounds"
        />
        <h1>Choose a melodie, close your eyes and listen</h1>
      </div>
      <div className="selection-div">
        <PlayerMelodies />
      </div>

      <div className="footer-div">
        <Progressbar value="3" />

        <ButtonMood />
      </div>
    </div>
  );
}

export default Melodies;
