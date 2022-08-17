import React from "react";
import "./HomePage.css";
import musicgirl from "./../images/musicgirl.png";
import musicsheet from "./../images/musicsheet.png";
import ButtonRelaxation from "../components/ButtonRelaxation.js";
import ButtonDistraction from "../components/ButtonDistraction.js";
import Progressbar from "../components/Progressbar";

function Home() {
  return (
    <div id="home-page">
      <header id="header">
        <h1 id="hometitle">
          <img
            id="musicgirl"
            src={musicgirl}
            alt="A cute cartoon character listening using headphones with music notation surrounding them"
          />
          WELCOME TO MUSIC THERAPY
          <img
            id="musicsheet"
            src={musicsheet}
            alt="A stylised representation of sheet music"
          />
        </h1>
      </header>

      <h2 id="needtitle">What do you need to feel better today ?</h2>
      <div id="distractionpart">
        {" "}
        <ButtonDistraction />
      </div>
      <div id="relaxationpart">
        {" "}
        <ButtonRelaxation />
      </div>
      <Progressbar value="1" />
    </div>
  );
}

export default Home;
