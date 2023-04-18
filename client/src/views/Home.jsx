import React from "react";
import { Filters, Search, Cards } from "../components";
import { useSelector } from "react-redux";

import "../styles/views/Home.scss";

function Home() {
  const { filter } = useSelector((state) => state.app);

  return (
    <div className="home">
      <Search />
      <div className="home-cont">
        <Cards />
        {filter && <Filters />}
      </div>
    </div>
  );
}

export default Home;
