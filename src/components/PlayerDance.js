import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MoodModal } from "./ButtonMood";
function PlayerDance() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="video-div">
      <ReactPlayer
        onEnded={() => setShowModal(true)}
        playing={true}
        url="https://youtube.com/playlist?list=PLr7gCWPwnxc5JK_34n08UZuOB72i7dnFY"
        controls={true}
      />
      <MoodModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default PlayerDance;
