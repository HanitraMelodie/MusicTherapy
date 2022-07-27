import React from 'react'
import './Home.css';
import musicgirl from './../images/musicgirl.png';
import musicsheet from './../images/musicsheet.png';
import ButtonRelaxation from '../components/ButtonRelaxation.js';
import ButtonDistraction from '../components/ButtonDistraction.js';

function Home() {
  return (
    <div id="home-page">
      <header id="header">
        <img
          id="musicgirl"
          src={musicgirl}
          alt="A cute cartoon character listening using headphones with music notation surrounding them"
        />
        <h1 id="hometitle">WELCOME TO MUSIC THERAPY</h1>
        <img
          id="musicsheet"
          src={musicsheet}
          alt="A stylised representation of sheet music"
        />
      </header>

         
            <h2 id="needtitle">What do you need ?</h2>
    
            <div id="distractionpart"> <ButtonDistraction/>
            </div>
            <div id="relaxationpart"> <ButtonRelaxation/>
            </div>
            

      <footer id="progressbar">
        <progress value="20" max="100" /> <span>1/5</span>
      </footer>
    </div>
  );
}

export default Home;
