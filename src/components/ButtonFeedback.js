import "./ButtonDistractionRelaxationMood.css";
import { useNavigate } from "react-router-dom";

// 1. I want a new component
// 2. it will _optionally_ take an 'isOpen' parameter
// 3. the component will be the existing dialog (inside the button mood component)
// 4. the button mood component should use this new component
// 5. player sing should be able to use this new component

export function ButtonFeedback({ isOpen, onClose }) {
  const navigate = useNavigate();

  function FeedPackPageRedirection() {
    navigate("/feedbackpage");
  }

  return (
    <div>
      <button id="ButtonMood" onClick={FeedPackPageRedirection}>
        For feedback,click here !
      </button>
    </div>
  );
}

export default ButtonFeedback;
