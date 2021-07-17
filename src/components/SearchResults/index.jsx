import React from "react";

//Components
import TrackList from "../TrackList";

const SearchResults = ({ searchTracks, addTrack }) => {
  return (
    <div id="tracks" className="flex-wrapper">
      <div className="tracks-wrapper">
        <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
      </div>
    </div>
  );
};

export default SearchResults;
