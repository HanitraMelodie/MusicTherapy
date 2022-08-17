import React, { useState } from "react";
import "./ButtonDistractionRelaxationMood.css";
import Modal from "react-modal";
import icon_music from "./../images/icon_music-notes.png";
import icon_tree from "./../images/icon_tree.png";
import { useNavigate } from "react-router-dom";
import Progressbar from "../components/Progressbar";
function ButtonRelaxation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function Distractiontype() {
    setIsOpen(!isOpen);
  }

  function NaturalSounds() {
    navigate("/soundspage");
  }

  function Melodies() {
    navigate("/melodiespage");
  }

  return (
    <div className="App">
      <button id="ButtonDistraction" onClick={Distractiontype}>
        Relaxation ?{" "}
      </button>
      <Modal
        id="DialogDistractionChoice"
        isOpen={isOpen}
        onRequestClose={Distractiontype}
        contentLabel="DistractionDialogbox"
      >
        <div>What type of relaxations do you need ? </div>
        <button class="ButtonDistractiontype" onClick={NaturalSounds}>
          NaturalSounds ?{" "}
          <img id="singingimage" src={icon_tree} alt="tree icon" />
        </button>
        <button class="ButtonDistractiontype" onClick={Melodies}>
          Melodies ?{" "}
          <img id="dancingimage" src={icon_music} alt="music notes icon" />
        </button>
        <Progressbar value="2" />
      </Modal>
    </div>
  );
}
export default ButtonRelaxation;
