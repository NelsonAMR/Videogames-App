import React, { useEffect } from "react";
import { Filters, Search, Cards, PaginatorCont } from "../components";
import { useDispatch } from "react-redux";
import { clearState, getGames, getGenres } from "../redux/actions";

import "../styles/views/Home.scss";

function Home() {
  // const { filterState } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="home">
      <Search />
      <div className="home-cont">
        <Cards />
        {/* {filterState && <Filters />} */}
        <Filters />
      </div>
      <PaginatorCont />
    </div>
  );
}

export default Home;
