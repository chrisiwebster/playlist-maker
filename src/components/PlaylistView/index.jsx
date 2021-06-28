import React, { useEffect } from "react";

//Components
import Button from "../Button";

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
  });

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
          <Button name="View playlists" onClick={() => viewPlaylists()} />
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
