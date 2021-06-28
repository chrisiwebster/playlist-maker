import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

//Components
import Header from "../Header";
import NavBar from "../NavBar";
import Home from "../Home";
import PlaylistView from "../PlaylistView";
import SearchWrapper from "../SearchWrapper";

//CSS
import "./App.css";

////Variables
const id = process.env.REACT_APP_SPOTIFY_KEY;
const redirect = window.location.href;
let accessToken;
let expiresIn = 0;
const scope =
  "playlist-read-private playlist-read-collaborative playlist-modify-public";

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

//App component
const App = () => {
  const [status, setStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [searchTracks, setSearchTracks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistInput, setPlaylistInput] = useState("New Playlist");
  const [playlists, setPlaylists] = useState([]);

  //NavBar
  const handleNavClick = () => {
    status === true ? setStatus(false) : setStatus(true);
  };

  //Sign into Spotify
  const handleSignIn = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${id}&response_type=token&scope=${scope}&redirect_uri=${redirect}`;
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
    fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
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
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
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

  //View playlist functions
  const viewPlaylists = () => {
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
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((jsonResponse) => {
            if (jsonResponse.items) {
              console.log(jsonResponse.items);
              return jsonResponse.items.map((playlist) => ({
                id: playlist.id,
                name: playlist.name,
              }));
            } else {
              return [];
            }
          })
          .then((jsonResponse) => {
            setPlaylists(jsonResponse);
          });
      });
  };

  return (
    <div>
      <Header title="Playlist Maker">
        <NavBar handleNavClick={handleNavClick} status={status} />
      </Header>
      <HashRouter basename={"/"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/search"
            render={(props) => (
              <SearchWrapper
                {...props}
                handleAPISearch={handleAPISearch}
                accessToken={accessToken}
                expiresIn={expiresIn}
                handleSignIn={handleSignIn}
                searchInput={searchInput}
                handleSearchInput={handleSearchInput}
                handleClearSearchInput={handleClearSearchInput}
                updatePlaylistName={updatePlaylistName}
                removeTrack={removeTrack}
                savePlaylist={savePlaylist}
                setPlaylistName={setPlaylistName}
                playlistTracks={playlistTracks}
                searchTracks={searchTracks}
                playlistName={playlistName}
                playlistInput={playlistInput}
                addTrack={addTrack}
                setPlaylistTracks={setPlaylistTracks}
                handleClearNameInput={handleClearNameInput}
              />
            )}
          />

          <Route
            exact
            path="/view-playlists"
            render={(props) => (
              <PlaylistView
                {...props}
                accessToken={accessToken}
                expiresIn={expiresIn}
                viewPlaylists={viewPlaylists}
                setPlaylists={setPlaylists}
                playlists={playlists}
                handleSignIn={handleSignIn}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
