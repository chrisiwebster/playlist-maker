import React from "react";

//Components
import TrackList from "../TrackList";

const SearchResults = ({ searchTracks, addTrack }) => {
  return (
    <div>
      <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
    </div>
  );
};

export default SearchResults;
