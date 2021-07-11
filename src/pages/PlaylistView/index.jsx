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
  checkAccessToken,
}) => {
  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
    checkAccessToken();
    viewPlaylists();
  }, []);

  return (
    <div className={className}>
      <h2>View your playlists</h2>
      {accessToken === "" && (
        <Button
          type="button"
          name="Sign in"
          id="sign"
          onClick={() =>
            handleSignIn("https://chrisiwebster.github.io/view-playlists")
          }
        />
      )}
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
