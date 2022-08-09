import React, { useState } from "react";
import "./ButtonMood.css";
import Modal from "react-modal";
import sadface from "./../images/sadface.png";
import happyface from "./../images/smiley.png";
import { useNavigate } from "react-router-dom";
// 1. I want a new component
// 2. it will _optionally_ take an 'isOpen' parameter
// 3. the component will be the existing dialog (inside the button mood component)
// 4. the button mood component should use this new component
// 5. player sing should be able to use this new component

export function MoodModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  function SadMood() {
    navigate("/ContactPage");
  }

  function Goodmood() {
    navigate("/Closure");
  }

  return (
    <Modal
      id="DialogChoice"
      isOpen={isOpen}
      contentLabel="MoodDialogbox"
      onRequestClose={() => onClose()}
    >
      <div>
        <h1>Do you feel better?</h1>
        <button className="ButtonMoodtype" onClick={Goodmood}>
          Yes <img className="smiley" src={happyface} alt="smiling face" />
        </button>
        <button className="ButtonMoodtype" onClick={SadMood}>
          No <img className="smiley" src={sadface} alt="sad face" />
        </button>
        <footer id="progressbar">
          <progress value="80" max="100" /> <span>4/5</span>
        </footer>
      </div>
    </Modal>
  );
}

function ButtonMood() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="MoodPopUp">
      <button id="ButtonMood" onClick={() => setIsOpen(true)}>
        Next
      </button>
      <MoodModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
export default ButtonMood;
