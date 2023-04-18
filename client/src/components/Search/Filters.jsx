import React from "react";
import { useDispatch } from "react-redux";

import "../../styles/components/Search/Filters.scss";
import { orderGames } from "../../redux/actions";

function Filters() {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const order = event.target.id;
    console.log(order);
    dispatch(orderGames(order));
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
      </div>
    </div>
  );
}

export default Filters;
