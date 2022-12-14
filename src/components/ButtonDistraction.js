import React, { useState } from "react";
import "./ButtonDistractionRelaxationMood.css";
import Modal from "react-modal";
import dancing from "./../images/dancing.png";
import singing from "./../images/singing.png";
import { useNavigate } from "react-router-dom";
import Progressbar from "../components/Progressbar";
function ButtonDistraction() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function Distractiontype() {
    setIsOpen(!isOpen);
  }

  function Dancing() {
    navigate("/Dancepage");
  }

  function Singing() {
    navigate("/Singpage");
  }

  function Musicquizzing() {
    navigate("/Musicquizpage");
  }

  return (
    <div className="App">
      <button id="ButtonDistraction" onClick={Distractiontype}>
        Distraction ?{" "}
      </button>
      <Modal
        id="DialogDistractionChoice"
        isOpen={isOpen}
        onRequestClose={Distractiontype}
        contentLabel="DistractionDialogbox"
      >
        <div id="QuestionDistraction">
          What type of distractions do you need ?{" "}
        </div>
        <button class="ButtonDistractiontype" onClick={Singing}>
          Singing ? <img id="singingimage" alt="mic" src={singing} />
        </button>
        <button class="ButtonDistractiontype" onClick={Dancing}>
          Dancing ? <img id="dancingimage" alt="dancing girl" src={dancing} />
        </button>
        <button class="ButtonDistractiontype" onClick={Musicquizzing}>
          Music quizz ?
        </button>
        <Progressbar value="2" />
      </Modal>
    </div>
  );
}

export default ButtonDistraction;
