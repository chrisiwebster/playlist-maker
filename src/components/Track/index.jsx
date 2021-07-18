import React from "react";

//Components
import Button from "../Button";

//CSS
import "./styles.css";

const Track = ({ track, remove, addTrack, removeTrack }) => {
  const renderButton = () => {
    if (remove) {
      return (
        <Button
          type="submit"
          name="-"
          className="btn-secondary"
          onClick={() => removeTrack(track)}
        />
      );
    } else {
      return (
        <Button
          type="submit"
          name="+"
          className="btn-secondary"
          onClick={() => addTrack(track)}
        />
      );
    }
  };
  return (
    <div className="tracks">
      <p>
        {track.name} | {track.artist}
        <br />
        {track.album}
      </p>
      {renderButton()}
    </div>
  );
};

export default Track;
