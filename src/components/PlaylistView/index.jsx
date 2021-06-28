import React, { useEffect, useState } from "react";

//Components
import Button from "../Button";

const PlaylistView = ({ className, accessToken, expiresIn }) => {
  const [playlists, setPlaylists] = useState([]);

  //View playlist functions
  const viewPlaylists = () => {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        const userId = jsonResponse.id;
        return (
          fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists?limit=50`,
            {
              headers: headers,
              method: "GET",
            }
          )
            .then((response) => response.json())
            // .then((jsonResponse) => {
            //   return jsonResponse.items[0]
            //     .map((item) => ({
            //       link: item.href,
            //       id: item.id,
            //       images: item.images,
            //       name: item.name,
            //       tracks: item.tracks.total,
            //       uri: item.uri,
            //     }))
            .then((jsonResponse) => {
              console.log(jsonResponse);
              setPlaylists(jsonResponse);
            })
        );
      });
    // });
  };

  useEffect(() => {
    document.title = "View playlists | Chrisi Webster";
  });
  return (
    <div className={className}>
      <h2>PlaylistView</h2>
      <Button name="View playlists" onClick={() => viewPlaylists()} />
    </div>
  );
};

export default PlaylistView;
