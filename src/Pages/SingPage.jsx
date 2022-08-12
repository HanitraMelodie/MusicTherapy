import React from "react";
import "./DefaultPagestyle.css";
import PlayerSing from "../components/PlayerSing";
import singing from "../images/singing.png";
import ButtonMood from "../components/ButtonMood";

function Sing() {
  return (
    <div id="Sing-Page">
      <div className="Question-header">
        <img
          id="icon"
          src={singing}
          opacity="0.5"
          alt="A microphone representing karaoke and singing"
        />
        <h1>Select and sing along</h1>
      </div>
      <div className="selection-div">
        <PlayerSing />
      </div>

      <div className="footer-div">
        <footer id="progressbar">
          <progress value="60" max="100" /> <span>3/5</span>
        </footer>

        <ButtonMood />
      </div>
    </div>
  );
}

export default Sing;
