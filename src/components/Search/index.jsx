import React, { useEffect } from "react";
import { Redirect } from "react-router";
import SearchWrapper from "../../pages/SearchWrapper";

//Components
import Button from "../Button";
import Input from "../Input";

//CSS
import "./styles.css";

const Search = ({
  handleAPISearch,
  accessToken,
  expiresIn,
  handleSignIn,
  searchInput,
  handleSearchInput,
  handleClearSearchInput,
  checkAccessToken,
}) => {
  useEffect(() => {
    checkAccessToken();
  }, []);
  return (
    <div className="search-buttons">
      {!accessToken && (
        <Button
          type="button"
          name="Sign in"
          id="sign"
          onClick={() => {
            handleSignIn("https://chrisiwebster.github.io/search");
          }}
        />
      )}
      {expiresIn !== undefined && (
        <form id="search" onSubmit={(e) => handleAPISearch(e)}>
          <Input
            type="text"
            value={searchInput}
            id="search"
            placeholder="Search for songs"
            onChange={(e) => handleSearchInput(e)}
            onBlur={() => handleClearSearchInput()}
          />
          <Button type="submit" name="Search" />
        </form>
      )}
    </div>
  );
};

export default Search;
