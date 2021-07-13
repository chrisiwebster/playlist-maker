import React, { useEffect } from "react";

//Components
import Button from "../../components/Button";

const Home = ({ checkAccessToken, handleSignIn, accessToken, expiresIn }) => {
  useEffect(() => {
    checkAccessToken();
  }, [checkAccessToken]);
  return (
    <div className="home">
      <h2>I am home</h2>
      {accessToken === "" && (
        <Button
          type="button"
          name="Sign in"
          id="sign"
          onClick={() => handleSignIn()}
        />
      )}
      {expiresIn !== undefined && <p>You're good to go</p>}
    </div>
  );
};

export default Home;
