import React from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { actFilters } from "../../redux/actions";
import Paginator from "../Paginator/Paginator";

import "../../styles/components/Search/Search.scss";

function Search({ setIsLoading }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actFilters());
  };

  return (
    <div className="search">
      <Paginator />
      <SearchBar setIsLoading={setIsLoading} />
      <button className="search-button btn" onClick={handleClick}>
        Filtros
      </button>
    </div>
  );
}

export default Search;
