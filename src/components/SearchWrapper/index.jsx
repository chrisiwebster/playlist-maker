import React, { useEffect } from "react";

//CSS
import "./styles.css";

//Components
import SearchResults from "../SearchResults";
import Search from "../Search";
import Playlist from "../Playlist";

//SearchWrapper
const SearchWrapper = ({
  expiresIn,
  accessToken,
  handleAPISearch,
  handleSignIn,
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
    <div>
      <Search
        handleAPISearch={handleAPISearch}
        accessToken={accessToken}
        expiresIn={expiresIn}
        handleSearchInput={handleSearchInput}
        handleClearSearchInput={handleClearSearchInput}
        searchInput={searchInput}
        handleSignIn={handleSignIn}
      />

      {expiresIn !== 0 && (
        <div className="search-playlist-wrapper">
          <div className="search-results-wrapper">
            <h2>Search results ({searchTracks.length})</h2>
            <SearchResults searchTracks={searchTracks} addTrack={addTrack} />
          </div>
          {searchTracks && (
            <div className="playlist-wrapper">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWrapper;
