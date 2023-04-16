import React from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

import "../../styles/components/Search/Search.scss";

function Search() {
  return (
    <div className="search">
      <SearchBar />
      <Filters />
    </div>
  );
}

export default Search;
