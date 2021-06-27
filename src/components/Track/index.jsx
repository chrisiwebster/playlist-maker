import React from "react";

//Components
import Button from "../Button";

//CSS
import "./styles.css";

const Track = ({ track, remove, addTrack, removeTrack }) => {
  const renderButton = () => {
    if (remove) {
      return (
        <Button type="submit" name="-" onClick={() => removeTrack(track)} />
      );
    } else {
      return <Button type="submit" name="+" onClick={() => addTrack(track)} />;
    }
  };
  return (
    <div className="tracks">
      <div className="flex-wrapper">
        <h3>{track.name}</h3> {renderButton()}
      </div>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
