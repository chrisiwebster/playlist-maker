import React from "react";

//Components
import Button from "../Button";
import Input from "../Input";
import TrackList from "../TrackList";

const Playlist = ({
  updatePlaylistName,
  playlistTracks,
  savePlaylist,
  removeTrack,
  playlistName,
  setPlaylistTracks,
  setPlaylistName,
  handleClearNameInput,
  playlistInput,
}) => {
  //Creating a separate function so I can handle changing the state
  const handleSavePlaylist = (e) => {
    e.preventDefault();
    const trackURIs = playlistTracks.map((track) => track.uri);
    savePlaylist(playlistName, trackURIs);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
    handleClearNameInput();
  };

  return (
    <div id="playlist">
      <form id="playlist-form" onSubmit={(e) => handleSavePlaylist(e)}>
        <Input
          type="text"
          id="playlist"
          value={playlistInput}
          onChange={(e) => updatePlaylistName(e)}
        />
        <Button
          type="submit"
          name="Save"
          id="save-spotify"
          className="btn-primary"
        />
      </form>
      <div>
        <TrackList
          tracks={playlistTracks}
          removeTrack={removeTrack}
          remove={true}
        />
      </div>
    </div>
  );
};

export default Playlist;
