import React from "react";

//Components
import TrackList from "../TrackList";

const SearchResults = ({ searchTracks, addTrack, message }) => {
  return (
    <div className="flex-wrapper">
      <div className="tracks-wrapper">
        {searchTracks === [] && { message }}
        <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
      </div>
    </div>
  );
};

export default SearchResults;
