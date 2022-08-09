import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MoodModal } from "./ButtonMood";

function PlayerNaturalSounds() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="video-div">
      <ReactPlayer
        onEnded={() => setShowModal(true)}
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc7oMNstjU5CcEHMRIZnp9Yc"
        controls={true}
      />
      <MoodModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default PlayerNaturalSounds;
