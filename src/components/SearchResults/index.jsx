import React from "react";

//Components
import TrackList from "../TrackList";

const SearchResults = ({ searchTracks, addTrack }) => {
  return (
    <div className="track-list">
      <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
    </div>
  );
};

export default SearchResults;
