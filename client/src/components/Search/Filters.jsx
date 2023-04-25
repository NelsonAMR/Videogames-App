import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/components/Search/Filters.scss";
import { filterGames, getPage, orderGames } from "../../redux/actions";
import Selector from "../Selector/Selector";

function Filters() {
  const { filterState } = useSelector((state) => state.app);
  const [filters, setFilters] = useState([]);
  const { genres } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const order = event.target.id;
    dispatch(orderGames(order));
  };

  useEffect(() => {
    dispatch(filterGames(filters));
    dispatch(getPage(1));
  }, [filters, dispatch]);

  return (
    <div className={`filter${filterState ? " show" : ""}`}>
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
        <h4>Filtros</h4>
        <Selector
          state={filters}
          setState={setFilters}
          datalist={genres}
          name="genres"
          placeholder="Incluir generos"
        />
      </div>
    </div>
  );
}

export default Filters;
