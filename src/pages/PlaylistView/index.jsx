import React, { useEffect } from "react";

//Components
import Header from "../../components/Header";

const PlaylistView = ({ playlists, viewPlaylists, errorMessage }) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    viewPlaylists();
  }, [viewPlaylists]);

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

      <ul>
        {playlists.map((playlist) => {
          return <div key={playlist.id}>{playlist.name}</div>;
        })}
      </ul>
    </div>
  );
};

export default PlaylistView;
