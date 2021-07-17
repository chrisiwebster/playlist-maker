import React from "react";
import radio from "./colour_radio.png";

//CSS
import "./styles.css";

//Components
import Header from "../../components/Header";

const Home = ({ accessToken, expiresIn }) => {
  return (
    <div id="home">
      <Header title="Playlist Maker" />
      <h2>Use the Spotify API</h2>
      {accessToken === "" && (
        <div id="warning-box">
          <div id="warning-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div id="warning-text">
            <p>Sign into Spotify using the button above.</p>
            <p>
              Then you can navigate to the rest of the site to create and view
              playlists.
            </p>
          </div>
        </div>
      )}
      {expiresIn !== undefined && (
        <section>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            id="colour-radio"
            src={radio}
            alt="Decorative"
            title="Colourful radio"
          />
        </section>
      )}
    </div>
  );
};

export default Home;
