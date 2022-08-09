import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MoodModal } from "./ButtonMood";
function Player_Melodies() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="video-div">
      <ReactPlayer
        onEnded={() => setShowModal(true)}
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc5WrNINP9FbcrwJiXVqHiKX"
        controls={true}
      />
      <MoodModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Player_Melodies;
