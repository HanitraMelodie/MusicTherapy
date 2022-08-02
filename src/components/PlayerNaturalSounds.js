import React from "react";
import ReactPlayer from "react-player";

function PlayerNaturalSounds() {
  return (
    <div className="video-div">
      <ReactPlayer
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc7oMNstjU5CcEHMRIZnp9Yc"
        controls="1"
      />
    </div>
  );
}

export default PlayerNaturalSounds;
