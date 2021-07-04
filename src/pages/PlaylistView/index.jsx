import React, { useEffect } from "react";

//Components
import Button from "../../components/Button";

const PlaylistView = ({
  className,
  accessToken,
  expiresIn,
  playlists,
  viewPlaylists,
  handleSignIn,
}) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    viewPlaylists();
  }, []);

  return (
    <div className={className}>
      <h2>PlaylistView</h2>
      {!accessToken && (
        <Button
          type="button"
          name="Sign in"
          id="sign"
          onClick={() => handleSignIn()}
        />
      )}
      {expiresIn !== 0 && (
        <div>
          <ul>
            {playlists.map((playlist) => {
              return <li key={playlist.id}>{playlist.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaylistView;
