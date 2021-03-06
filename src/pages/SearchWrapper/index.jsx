import React, { useEffect } from "react";

//CSS
import "./styles.css";

//Components
import SearchResults from "../../components/SearchResults";
import Search from "../../components/Search";
import Playlist from "../../components/Playlist";
import Header from "../../components/Header";
import WarningBox from "../../components/WarningBox";

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
      {errorMessage && <WarningBox errorMessage={errorMessage} />}
      <Search
        handleAPISearch={handleAPISearch}
        handleSearchInput={handleSearchInput}
        handleClearSearchInput={handleClearSearchInput}
        searchInput={searchInput}
        errorMessage={errorMessage}
      />
      <div>
        <h2>
          Search results (
          {
            //checks that searchTracks exists before reading its length
            searchTracks && searchTracks.length
          }
          )
        </h2>
        <SearchResults searchTracks={searchTracks} addTrack={addTrack} />
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
    </div>
  );
};

export default SearchWrapper;
