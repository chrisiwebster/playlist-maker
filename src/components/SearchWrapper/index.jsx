import React, { useState, useEffect } from "react";

//CSS
import "./styles.css";

//Components
import SearchResults from "../SearchResults";
import Search from "../Search";
import Playlist from "../Playlist";
import PlaylistView from "../PlaylistView";

//Variables
const id = process.env.REACT_APP_SPOTIFY_KEY;
const redirect = `${window.location.href}`;
let accessToken;
let expiresIn = 0;

//Access token check
const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
//if they're there grabs the right stuff
if (accessTokenMatch && expiresInMatch) {
  accessToken = accessTokenMatch[1];
  expiresIn = Number(expiresInMatch[1]);
  //every second, removes a value from token, if expiresIn is 0, there is no accessToken.
  setInterval(() => {
    expiresIn--;
    if (expiresIn === 0) {
      accessToken = "";
      document.location.reload();
    }
  }, 1000);
}

//SearchWrapper
const SearchWrapper = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchTracks, setSearchTracks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistInput, setPlaylistInput] = useState("New Playlist");

  //Sign into Spotify
  const handleSignIn = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${id}&response_type=token&scope=playlist-modify-public%20playlist-read-private%20playlist-read-collaborative&redirect_uri=${redirect}`;
  };

  //Search for tracks
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setSearchTerm(searchInput);
  };

  const handleClearSearchInput = () => {
    setSearchInput("");
  };

  const handleAPISearch = (e) => {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          //if there are no tracks in the response
          return [];
        }
        console.log(jsonResponse);
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      })
      .then((jsonResponse) => {
        setSearchTracks(jsonResponse);
      });
  };

  //Playlist add functions
  const addTrack = (track) => {
    //seeing if the track is already in the playlist
    if (
      playlistTracks.find((savedTrack) => savedTrack.id === playlistTracks.id)
    ) {
      return;
    }
    setPlaylistTracks((prevState) => {
      return [...prevState, track];
    });
  };

  const removeTrack = (track) => {
    let tracks = playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    setPlaylistTracks(tracks);
  };

  const updatePlaylistName = (e) => {
    setPlaylistInput(e.target.value);
    setPlaylistName(playlistInput);
  };

  const handleClearNameInput = () => {
    setPlaylistInput("New Playlist");
  };

  const savePlaylist = (name, trackUris) => {
    if (!name || !trackUris.length) {
      return;
    }

    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        const userId = jsonResponse.id;
        return fetch(
          `https://api.spotify.com/v1/users/${userId}/playlists?limit=50`,
          {
            headers: headers,
            method: "POST",
            body: JSON.stringify({ name: name }),
          }
        )
          .then((response) => response.json())
          .then((jsonResponse) => {
            console.log(jsonResponse);
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  };
  //When mounting
  useEffect(() => {});
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
          <div class="search-results-wrapper">
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

      <PlaylistView
        className="hidden"
        expiresIn={expiresIn}
        accessToken={accessToken}
      />
    </div>
  );
};

export default SearchWrapper;
