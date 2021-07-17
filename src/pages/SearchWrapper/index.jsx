import React, { useEffect } from "react";

//CSS
import "./styles.css";

//Components
import SearchResults from "../../components/SearchResults";
import Search from "../../components/Search";
import Playlist from "../../components/Playlist";
import Header from "../../components/Header";

//SearchWrapper
const SearchWrapper = ({
  errorMessage,
  handleAPISearch,
  searchInput,
  addTrack,
  handleSearchInput,
  handleClearSearchInput,
  searchTracks,
  updatePlaylistName,
  removeTrack,
  savePlaylist,
  setPlaylistName,
  playlistTracks,
  playlistName,
  playlistInput,
  setPlaylistTracks,
  handleClearNameInput,
}) => {
  //When mounting
  useEffect(() => {
    document.title = "Search | Chrisi Webster";
  });

  return (
    <div id="search-results">
      <Header title="Search for songs" />
      {errorMessage !== "" && (
        <div className="warning-box">
          <div className="warning-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div className="warning-text">
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <Search
        handleAPISearch={handleAPISearch}
        handleSearchInput={handleSearchInput}
        handleClearSearchInput={handleClearSearchInput}
        searchInput={searchInput}
      />
      <section className="search-playlist-wrapper">
        <section className="search-results-wrapper">
          <h2>Search results ({searchTracks.length})</h2>
          <SearchResults searchTracks={searchTracks} addTrack={addTrack} />
        </section>
        {searchTracks && (
          <section className="playlist-wrapper">
            <h2>Add to playlist</h2>
            <Playlist
              updatePlaylistName={updatePlaylistName}
              removeTrack={removeTrack}
              savePlaylist={savePlaylist}
              setPlaylistName={setPlaylistName}
              playlistTracks={playlistTracks}
              searchTracks={searchTracks}
              playlistName={playlistName}
              playlistInput={playlistInput}
              setPlaylistTracks={setPlaylistTracks}
              handleClearNameInput={handleClearNameInput}
            />
          </section>
        )}
      </section>
    </div>
  );
};

export default SearchWrapper;
