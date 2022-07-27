import ButtonMood from '../components/ButtonMood';import React from 'react' 
import "./Dance.css"
import icon_music from '../images/icon_music-notes.png';
import PlayerMelodies from '../components/PlayerMelodies';



function Melodies(){
    return (
    <div id='Melodies-Page'>
        <div className='Question-header'>
        <img id='melodies_pic' src= {icon_music} opacity ="0.5" alt='A music note representing compositioned sounds'/>
        <h1>Choose a melodie, close your eyes and listen</h1>
        </div>
        <div className="selection-div">
        <PlayerMelodies />
        </div>

    <div className='footer-div'>
    <footer id="progressbar"><progress value="60" max="100" /> <span>3/5</span></footer>
   
    <ButtonMood/>

    </div>
    </div>

);}

export default Melodies;