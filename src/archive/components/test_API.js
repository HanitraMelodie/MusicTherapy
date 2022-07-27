//https://www.freecodecamp.org/news/use-the-youtube-iframe-api-in-react/

import React from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import "./styles.css";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Render function for Prismic headless CMS pages
function Content() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }

  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleExerciseComplete = () => console.log("Do something");

  return (
    <div>
      <div>
        <h1>Video</h1>
        <div></div>
      </div>
      <div>
        <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <div>
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={opts}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div>
          <h3>Completed the exercise?</h3>
          <button onClick={handleExerciseComplete}>Complete exercise</button>
        </div>
      </Modal>
    </div>
  );
}

export default Content;
