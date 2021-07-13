import React, { useEffect } from "react";

const PlaylistView = ({
  className,
  accessToken,
  expiresIn,
  playlists,
  viewPlaylists,
  checkAccessToken,
}) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    checkAccessToken();
    viewPlaylists();
  }, [viewPlaylists, checkAccessToken]);

  return (
    <div className={className}>
      <h2>View your playlists</h2>
      {accessToken === "" && <p>You need to sign in</p>}
      {expiresIn !== undefined && (
        <div>
          <ul>
            {playlists.map((playlist) => {
              return <div key={playlist.id}>{playlist.name}</div>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaylistView;
