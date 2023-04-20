import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/components/Search/Filters.scss";
import { filterGames, orderGames } from "../../redux/actions";

function Filters() {
  const { genres } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const order = event.target.id;
    dispatch(orderGames(order));
  };

  const handleFilter = (event) => {
    const filter = event.target.value;
    dispatch(filterGames(filter));
    console.log(!filter);
  };

  return (
    <div className="filter">
      <div className="filter-order">
        <h4>Ordenar por</h4>
        <div className="order-cont">
          <div className="order">
            <input type="radio" name="order" id="a-z" onClick={handleOrder} />
            <label htmlFor="a-z">A - Z</label>
          </div>
          <div className="order">
            <input type="radio" name="order" id="z-a" onClick={handleOrder} />
            <label htmlFor="z-a">Z - A</label>
          </div>
        </div>
      </div>
      <div className="filter-filters">
        <h4>Filtrar por</h4>
        <input type="search" list="genresList" onChange={handleFilter} />
        <datalist id="genresList">
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default Filters;
