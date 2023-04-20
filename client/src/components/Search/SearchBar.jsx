import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearState, getGames } from "../../redux/actions";

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
    setGame("");
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Videojuego"
        onChange={handleChange}
        value={game}
      />
      <button>Buscar</button>
    </form>
  );
}

export default SearchBar;
