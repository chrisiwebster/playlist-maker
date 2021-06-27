import React from "react";

//Components
import Track from "../Track";

const TrackList = ({ tracks, addTrack, removeTrack, remove }) => {
  return (
    <div className="track-list">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            addTrack={addTrack}
            removeTrack={removeTrack}
            remove={remove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
