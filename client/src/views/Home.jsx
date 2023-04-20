import React, { useEffect } from "react";
import { Filters, Search, Cards, Paginator } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getGames,
  getGenres,
  getPlatforms,
} from "../redux/actions";

import "../styles/views/Home.scss";

function Home() {
  const { filterState } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className="home">
      <Search />
      <div className="home-cont">
        <Cards />
        {filterState && <Filters />}
      </div>
      <Paginator />
    </div>
  );
}

export default Home;
