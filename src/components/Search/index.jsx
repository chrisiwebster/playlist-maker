import React from "react";

//Components
import Button from "../Button";
import Input from "../Input";

//CSS
import "./styles.css";

const Search = ({
  handleAPISearch,
  searchInput,
  handleSearchInput,
  handleClearSearchInput,
}) => {
  return (
    <form id="search" onSubmit={(e) => handleAPISearch(e)}>
      <Input
        type="text"
        value={searchInput}
        id="search"
        placeholder="Search for songs"
        onChange={(e) => handleSearchInput(e)}
        onBlur={() => handleClearSearchInput()}
      />
      <Button type="submit" name="Search" className="btn-primary" />
    </form>
  );
};

export default Search;
