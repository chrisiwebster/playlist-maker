import React from "react";

//Components
import TrackList from "../TrackList";

//CSS
import "./styles.css";

const SearchResults = ({ searchTracks, addTrack, message }) => {
  return (
    <div className="flex-wrapper">
      <div className="tracks-wrapper">
        <h2>Search results ({searchTracks.length})</h2>
        {searchTracks === [] && { message }}
        <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
      </div>
    </div>
  );
};

export default SearchResults;
