import React, { useEffect } from "react";

const PlaylistView = ({ className, playlists, viewPlaylists }) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    viewPlaylists();
  }, [viewPlaylists]);

  return (
    <div className={className}>
      <h2>View your playlists</h2>
      <ul>
        {playlists.map((playlist) => {
          return <div key={playlist.id}>{playlist.name}</div>;
        })}
      </ul>
    </div>
  );
};

export default PlaylistView;
