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
    <section className="tracks">
      <div className="flex-wrapper">
        <p>
          {track.name} | {track.artist}
        </p>
        {renderButton()}
      </div>
      <p>{track.album}</p>
    </section>
  );
};

export default Track;
