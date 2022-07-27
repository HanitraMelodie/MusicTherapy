import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

function PlayerSing() {
  return (
    <div>
      <div className="video-div">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=68vZX2uUKKA&ab_channel=ChoyLyrics"
          controls={true}
        />
      </div>
      <div className="video-div">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Xh4ugYiXF-Q&list=PL5UVYXAb1-WqT54_DDOsrJDcxdG2wZCc-&index=7&ab_channel=ashoe480"
          controls={true}
        />
      </div>
      <div className="video-div">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0fTUj9mfnUk&ab_channel=Alex"
          controls={true}
        />
      </div>
      <div className="video-div">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8xG7mH8i-WE&ab_channel=Pillow"
          controls={true}
        />
      </div>
    </div>
  );
}

export default PlayerSing;