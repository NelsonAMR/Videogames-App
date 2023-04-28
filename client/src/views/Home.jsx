import React, { Fragment, useEffect, useState } from "react";
import {
  Filters,
  Search,
  Cards,
  PaginatorCont,
  Loading,
  NoCards,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getGames, getGenres } from "../redux/actions";

import "../styles/views/Home.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { games } = useSelector((state) => state.games);
  // const { filter } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGenres());
    dispatch(getGames()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="home">
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <Search setIsLoading={setIsLoading} />
          <div className="home-cont">
            {games.length ? <Cards /> : <NoCards />}
            <Filters />
          </div>
          <PaginatorCont />
        </Fragment>
      )}
    </div>
  );
}

export default Home;
