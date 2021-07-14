import React from "react";

//CSS
import "./styles.css";

//Components
import Header from "../../components/Header";

const Home = ({ accessToken, expiresIn }) => {
  return (
    <div className="home">
      <Header title="Playlist Maker" />
      <h2>I am home</h2>
      {accessToken === "" && "sign in"}
      {expiresIn !== undefined && <p>You're good to go</p>}
    </div>
  );
};

export default Home;
