import React from "react";

//Components
import TrackList from "../TrackList";

const SearchResults = ({ searchTracks, addTrack }) => {
  return (
    <section id="tracks" className="flex-wrapper">
      <TrackList tracks={searchTracks} addTrack={addTrack} remove={false} />
    </section>
  );
};

export default SearchResults;
