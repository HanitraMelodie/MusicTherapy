import React from "react";
import ReactPlayer from "react-player";

function PlayerSing() {
  return (
    <div className="video-div">
      <ReactPlayer
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc74SvrxWB7ihnpSrCREWA5A"
        controls={true}
      />
    </div>
  );
}

export default PlayerSing;
