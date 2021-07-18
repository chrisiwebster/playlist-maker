import React, { useEffect } from "react";

//CSS
import "./styles.css";

//Components
import Header from "../../components/Header";

const PlaylistView = ({ playlists, viewPlaylists, errorMessage }) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    viewPlaylists();
  }, []);

  return (
    <div id="playlist">
      <Header title="View your playlists" />
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

      <section>
        {playlists.map((playlist) => {
          return (
            <div className="playlist-wrapper" key={playlist.id}>
              <h3>{playlist.name}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PlaylistView;
