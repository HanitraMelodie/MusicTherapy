import React from "react";
import "./ContactPage.css";
function ContactPage() {
  return (
    <div>
      <header id="header1">
        <h1 id="contact-page">Here are some contacts for support</h1>
      </header>

      <div id="needtitle1">
        <p>Call Samaritans anonymously on 116</p>

        <p>
          Anxiety support on 0844 775 774 (Infoline, 9.30am - 5.30pm, Mon-Fri)
        </p>
        <p>Depression support 01635 869 754</p>

        <p>
          Self injury Support 0808 800 8088 (Freephone helpline, 7pm - 10pm, Mon
          - Fri)
        </p>
      </div>

      <footer id="progressbar">
        <progress value="100" max="100" /> <span>5/5</span>
      </footer>
    </div>
  );
}

export default ContactPage;
