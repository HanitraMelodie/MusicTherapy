import React, { useState } from "react";

export function Progressbar() {
  const [value, setValue] = useState(1);
  return (
    <div className="App">
      <button id="ButtonMood" value={value} onClick={() => setValue(value + 1)}>
        Next
      </button>
      <footer id="progressbar">
        <progress value={`${value}`} max="5" /> <span>{value}/5</span>
      </footer>
    </div>
  );
}

export default Progressbar;
