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
    <form
      id="playlist-form"
      className="playlist-wrapper"
      onSubmit={(e) => handleSavePlaylist(e)}
    >
      <h2>Playlist maker</h2>
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

      <Button type="submit" name="Save to Spotify" />
    </form>
  );
};

export default Playlist;
