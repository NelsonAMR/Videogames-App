import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selector from "../Selector/Selector";
import { filterGames, getPage, orderGames } from "../../redux/actions";

import "../../styles/components/Search/Filters.scss";

function Filters() {
  const { filterState } = useSelector((state) => state.app);
  const [filters, setFilters] = useState([]);
  const [order, setOrder] = useState("original");
  const { genres } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const { value } = event.target;
    setOrder(value);
    dispatch(orderGames(value));
  };

  const handleClean = () => {
    setFilters([]);
    setOrder("original");
  };

  useEffect(() => {
    dispatch(filterGames(filters));
    dispatch(getPage(1));
  }, [filters, dispatch]);

  return (
    <div className={`filter ${filterState ? " show" : ""}`}>
      <div className="filter-order">
        <h4>Ordenar por</h4>
        <select
          name="orden"
          placeholder="Ordenamiento"
          onChange={handleOrder}
          value={order}
        >
          <option value="original">Recomendados</option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
          <option value="rating-asc">Rating Ascendente</option>
          <option value="rating-des">Rating Descendente</option>
        </select>
      </div>
      <div className="filter-filters">
        <h4>Filtros</h4>
        <Selector
          state={filters}
          setState={setFilters}
          datalist={genres}
          name="genres"
          placeholder="Incluir generos"
        />
      </div>
      <button className="btn" onClick={handleClean}>
        Limpiar
      </button>
    </div>
  );
}

export default Filters;
