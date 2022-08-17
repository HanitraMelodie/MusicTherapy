import React from "react";
import "./ClosurePage.css";
import Progressbar from "../components/Progressbar";
import ButtonFeedback from "../components/ButtonFeedback";
function ClosurePage() {
  return (
    <div>
      <div className="header">
        <p> Thanks for using our service</p>
      </div>

      <div className="content">
        <p>
          {" "}
          We hope you feel better now <br></br>
          In case you experience some issues, please see other contacts
        </p>
      </div>
      <p id="needtitle1"> Let us know how we can improve our website</p>
      <ButtonFeedback />
      <Progressbar value="5" />
    </div>
  );
}

export default ClosurePage;
