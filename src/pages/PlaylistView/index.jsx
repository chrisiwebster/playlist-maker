import React, { useEffect } from "react";

//CSS
import "./styles.css";

//Components
import Header from "../../components/Header";
import WarningBox from "../../components/WarningBox";

const PlaylistView = ({ playlists, viewPlaylists, errorMessage }) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    viewPlaylists();
  }, []);

  return (
    <div id="playlist">
      <Header title="View your playlists" />
      {errorMessage !== "" && <WarningBox errorMessage={errorMessage} />}

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
