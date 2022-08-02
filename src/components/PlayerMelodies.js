import React from "react";
import ReactPlayer from "react-player";

function Player_Melodies() {
  return (
    <div className="video-div">
      <ReactPlayer
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc5WrNINP9FbcrwJiXVqHiKX"
        controls="1"
      />
    </div>
  );
}

export default Player_Melodies;
