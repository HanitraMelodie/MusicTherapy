import ButtonMood from '../components/ButtonMood';import React from 'react' 
import "./Dance.css"
import Icon_dance from '../images/icon_tree.png'
import PlayerNaturalSounds from '../components/PlayerNaturalSounds';



function Naturalsounds(){
    return (
    <div id='NaturalSounds-Page'>
        <div className='Question-header'>
        <img id='naturalsounds_pic' src= {Icon_dance} opacity ="0.5" alt=' A tree representing nature and the sounds of nature' />
        <h1>Choose a sound, close your eyes and listen</h1>
        </div>
        <div className="selection-div">
        <PlayerNaturalSounds />
        </div>

    <div className='footer-div'>
    <footer id="progressbar"><progress value="60" max="100" /> <span>3/5</span></footer>
   
    <ButtonMood/>

    </div>
    </div>

);}

export default Naturalsounds;
