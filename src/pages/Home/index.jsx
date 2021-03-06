import React from "react";
import radio from "./colour_radio.png";

//Components
import Header from "../../components/Header";
import WarningBox from "../../components/WarningBox";

const Home = ({ accessToken, expiresIn }) => {
  return (
    <div id="home">
      <Header title="Playlist Maker" />
      {accessToken === "" && (
        <WarningBox errorMessage="Sign into Spotify to navigate to the rest of the site." />
      )}
      {expiresIn !== undefined && (
        <section>
          <div className="content-wrapper">
            <h2>Use the Spotify API</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
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
