import React from "react";

export function Progressbar({ value }) {
  return (
    <div>
      <footer id="progressbar">
        <progress value={`${value}`} max="6" /> <span>{value}/6</span>
      </footer>
    </div>
  );
}

export default Progressbar;
