import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menuicon from "./images/menuicon.png";

const FullNavbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dancepage">Dance</Link>
      </li>
      <li>
        <Link to="/singpage">Sing</Link>
      </li>
      <li>
        <Link to="/musicquizpage">Musicquiz</Link>
      </li>
      <li>
        <Link to="/soundspage">Sounds</Link>
      </li>
      <li>
        <Link to="/melodiespage">Melodies</Link>
      </li>
      <li>
        <Link to="/contactpage">Contact</Link>
      </li>
      <li>
        <Link to="/feedbackpage">Feedback</Link>
      </li>
    </ul>
  </nav>
);

const MusicMenu = () => {
  // TODO:
  // 1. get a hamburger icon loaded (svg?!)
  // 2. position the navbar over the _top_ of the elements, rather than push it down (postion absolute with a z-index?)

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <button onClick={() => setShowNav((state) => !state)}>
        <img id="menuicon" src={menuicon} alt="A menu icon with music note" />
      </button>

      {showNav && <FullNavbar />}
    </>
  );
};

function Navbar() {
  // The navbar has 2 different modes!
  // 1. When the browser window is _large_ - we should show the navbar inline
  // 2. When the browser window is _small_ - we should show a button that will toggle the navbar

  const TABLET_BREAKPOINT = 768;

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth > TABLET_BREAKPOINT
  );

  // const [x, setX] = useState();
  // the first variable is the current value
  // the second variable is a function that we can call to update the value

  // on re-render, check if the screen size has changed
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsLargeScreen(window.innerWidth > TABLET_BREAKPOINT);
    });
  }, []);

  return isLargeScreen ? <FullNavbar /> : <MusicMenu />;
}

export default Navbar;
