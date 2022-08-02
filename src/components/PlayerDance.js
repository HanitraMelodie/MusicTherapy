import React from "react";
import ReactPlayer from "react-player";

function PlayerDance() {
  return (
    <div className="video-div">
      <ReactPlayer
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc5JK_34n08UZuOB72i7dnFY"
        controls="1"
      />
    </div>
  );
}

export default PlayerDance;
