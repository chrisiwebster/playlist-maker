import React, { useEffect } from "react";

//Components
import Button from "../Button";
import Input from "../Input";

//CSS
import "./styles.css";

const Search = ({
  handleAPISearch,
  accessToken,
  expiresIn,
  searchInput,
  handleSearchInput,
  handleClearSearchInput,
  checkAccessToken,
}) => {
  useEffect(() => {
    checkAccessToken();
  }, [checkAccessToken]);
  return (
    <div className="search-buttons">
      {!accessToken && <p>You need to sign in</p>}
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
