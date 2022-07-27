import React, { useState } from "react";
import './ButtonMood.css';
import Modal from 'react-modal';
import sadface from './../images/sadface.png';
import happyface from './../images/smiley.png';
import { useNavigate } from 'react-router-dom';

function ButtonMood() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    function Moodtype() {
    setIsOpen(!isOpen);}

    function SadMood() {
    navigate('/ContactPage');}
  
    function Goodmood() {
    navigate('/Closure');}
  
    return (
    <div className="MoodPopUp">
      <button id ="ButtonMood" onClick={Moodtype}> Next </button>
      <Modal id="DialogChoice"isOpen={isOpen} onRequestClose={Moodtype} contentLabel="MoodDialogbox">   

        <div> 
        <h1>Do you feed better?</h1>
        <button className="ButtonMoodtype" onClick= {Goodmood}>Yes <img className="smiley" src= {happyface} alt="smiling face"/></button>
        <button className="ButtonMoodtype" onClick={SadMood}>No <img className="smiley" src={sadface} alt="sad face"/></button>
        </div>
        <footer id="progressbar"><progress value="80" max="100" /> <span>4/5</span></footer>
      </Modal>
    </div>
  );
}
  export default ButtonMood;
