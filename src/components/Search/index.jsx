import React from "react";

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
}) => {
  return (
    <div className="search-buttons">
      {!accessToken && (
        <Button
          type="button"
          name="Sign in"
          id="sign"
          onClick={() => handleSignIn()}
        />
      )}
      {expiresIn !== 0 && (
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
