import React from "react";
import "./ClosurePage.css";

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
      <footer className="footer">
        <progress value="100" max="100" /> <span>5/5</span>
      </footer>
    </div>
  );
}

export default ClosurePage;
