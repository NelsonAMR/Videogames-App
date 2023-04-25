import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearState, getGames, getPage } from "../../redux/actions";

import "../../styles/components/Search/SearchBar.scss";

function SearchBar() {
  const [game, setGame] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const res = event.target.value;
    setGame(res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearState());
    dispatch(getGames(game));
    dispatch(getPage(1));
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
