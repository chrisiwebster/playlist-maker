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
  };

  return (
    <form id="playlist-form" onSubmit={(e) => handleSavePlaylist(e)}>
      <Input
        type="text"
        id="playlist"
        value={playlistInput}
        onChange={(e) => updatePlaylistName(e)}
        onBlur={() => handleClearNameInput()}
      />

      <TrackList
        tracks={playlistTracks}
        removeTrack={removeTrack}
        remove={true}
      />

      <Button type="submit" name="Save to Spotify" id="save-spotify" />
    </form>
  );
};

export default Playlist;
