import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import PlaylistView from "../pages/PlaylistView";
import SearchWrapper from "../pages/SearchWrapper";

//CSS
import "./App.css";

//Variables
const id = process.env.REACT_APP_SPOTIFY_KEY;
const scope =
  "playlist-read-private playlist-read-collaborative playlist-modify-public";
// const redirect = "https://chrisiwebster.github.io/playlist-maker";
const redirect = "http://localhost:3000/";

//App component
const App = () => {
  //State
  const [status, setStatus] = useState(false);
  const [expiresIn, setExpiresIn] = useState();
  const [accessToken, setAccessToken] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  const [searchTracks, setSearchTracks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistInput, setPlaylistInput] = useState("New Playlist");
  const [playlists, setPlaylists] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const checkAccessToken = () => {
    //Check access token in URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    //if they're there grabs the right stuff
    if (accessTokenMatch && expiresInMatch) {
      setAccessToken(accessTokenMatch[1]);
      setExpiresIn(Number(expiresInMatch[1]));
      //every second, removes a value from token, if expiresIn is 0, there is no accessToken.
      setInterval(() => {
        setExpiresIn((prevState) => {
          return prevState - 1;
        });

        if (expiresIn === 0) {
          setExpiresIn("");
        }
      }, 1000);
    }
  };

  //NavBar open and close
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
    if (expiresIn !== undefined) {
      fetch(
        `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=50`,
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
          if (jsonResponse.tracks.total === 0) {
            //if there are no tracks in the response, we return an error message to display
            setSearchInput("");
            return setErrorMessage(
              "No tracks matched that search term. Try again!"
            );
          }
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
    } else {
      setErrorMessage("You need to sign in");
    }
  };

  //Playlist add and remove functions
  const addTrack = (track) => {
    //seeing if the track is already in the playlist so it doesn't add twice
    for (let i = 0; i < playlistTracks.length; i++) {
      if (track.id === playlistTracks[i].id) {
        return;
      }
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

  //When cleared, input goes back to 'New Playlist'
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
    //First get the user ID
    if (expiresIn !== undefined) {
      return fetch("https://api.spotify.com/v1/me", {
        headers: headers,
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          const userId = jsonResponse.id;
          //Then search their playlists
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
                return jsonResponse.items.map((playlist) => ({
                  id: playlist.id,
                  name: playlist.name,
                  href: playlist.href,
                  images: playlist.images,
                }));
              } else {
                return [];
              }
            })
            .then((jsonResponse) => {
              setPlaylists(jsonResponse);
            });
        });
    } else {
      setErrorMessage("You need to sign in");
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, []);
  return (
    <div id="app-wrapper">
      <NavBar
        handleNavClick={handleNavClick}
        status={status}
        expiresIn={expiresIn}
        accessToken={accessToken}
        handleSignIn={handleSignIn}
      />
      <Switch>
        <Route exact path="/">
          <Home
            checkAccessToken={checkAccessToken}
            accessToken={accessToken}
            expiresIn={expiresIn}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path={"/search"}>
          <SearchWrapper
            handleAPISearch={handleAPISearch}
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
            errorMessage={errorMessage}
          />
        </Route>
        <Route exact path="/view-playlists">
          <PlaylistView
            viewPlaylists={viewPlaylists}
            setPlaylists={setPlaylists}
            playlists={playlists}
            errorMessage={errorMessage}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
