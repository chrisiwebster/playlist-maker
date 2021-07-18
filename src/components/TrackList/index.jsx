import React from "react";

//Components
import Track from "../Track";

const TrackList = ({ tracks, addTrack, removeTrack, remove }) => {
  return (
    <div className="track-list">
      {
        //checks if tracks exists before attempting to map over tracks
        tracks &&
          tracks.map((track) => {
            return (
              <Track
                track={track}
                key={track.id + "1"}
                addTrack={addTrack}
                removeTrack={removeTrack}
                remove={remove}
              />
            );
          })
      }
    </div>
  );
};

export default TrackList;
