import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearState, getGames, getPage } from "../../redux/actions";

import "../../styles/components/Search/SearchBar.scss";

function SearchBar({ setIsLoading }) {
  const [game, setGame] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const res = event.target.value;
    setGame(res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(clearState());
    dispatch(getPage(1));
    dispatch(getGames(game)).then(() => setIsLoading(false));
    setGame("");
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca tu videojuego"
        onChange={handleChange}
        value={game}
      />
      <button className="btn">Buscar</button>
    </form>
  );
}

export default SearchBar;
