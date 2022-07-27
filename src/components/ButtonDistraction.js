import React, { useState } from "react";
import './ButtonDistraction.css';
import Modal from 'react-modal';
import dancing from './../images/dancing.png';
import singing from './../images/singing.png';
import { useNavigate } from 'react-router-dom';

function ButtonDistraction() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function Distractiontype() {
    setIsOpen(!isOpen);
  }

  function Dancing() {
    navigate('/Dance');
  }

  function Singing() {
    navigate('/Sing');
  }

  function Musicquizzing() {
    navigate('/Musicquizz');
  }

  return (
    <div className="App">

      <button id="ButtonDistraction" onClick={Distractiontype}>Distraction ? </button>
      <Modal id="DialogDistractionChoice" isOpen={isOpen} onRequestClose={Distractiontype} contentLabel="DistractionDialogbox">
        <div id= "QuestionDistraction">What type of distractions do you need ? </div>
        <button class="ButtonDistractiontype" onClick={Singing}>Singing ? <img id="singingimage" alt="mic" src={singing}/></button>
        <button class="ButtonDistractiontype" onClick={Dancing}>Dancing ? <img id="dancingimage" alt="dancing girl" src={dancing}/></button>
        <button class="ButtonDistractiontype" onClick={Musicquizzing}>Music quizz ?</button>
        <footer id="progressbar"><progress value="40" max="100" /> <span>2/5</span></footer>
      </Modal>
    </div>
  );
}

export default ButtonDistraction;
