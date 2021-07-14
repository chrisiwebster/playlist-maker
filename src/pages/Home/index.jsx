import React from "react";

const Home = ({ checkAccessToken, handleSignIn, accessToken, expiresIn }) => {
  return (
    <div className="home">
      <h2>I am home</h2>
      {accessToken === "" && "sign in"}
      {expiresIn !== undefined && <p>You're good to go</p>}
    </div>
  );
};

export default Home;
