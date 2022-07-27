import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
<li>
    
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dance">Dance</Link>
        </li>
<li>
          <Link to="/sing">Sing</Link>
        </li>
<li>
          <Link to="/musicquizz">Musicquizz</Link>
        </li>

<li>
          <Link to="/naturalsounds">Sounds</Link>
        </li>
<li>
          <Link to="/melodies">Melodies</Link>
        </li>

<li>
          <Link to="/contactpage">Contact</Link>
        </li>


      </ul>
    </nav>
  );
}

export default Navbar;
