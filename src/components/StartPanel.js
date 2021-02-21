import React from "react";
import startVid from "../img/start.mp4";

const StartPanel = ({ clickHandler }) => {
  return (
    <div className="scores">
      <span className="final-score">Wanna get nuts?</span>
      <video
        className="start-video"
        autoPlay
        loop
        muted
        playsInline
        src={startVid}
      ></video>
      <button className="btn btn-sml" onClick={clickHandler}>
        LET'S GET NUTS!
      </button>
    </div>
  );
};

export default StartPanel;
