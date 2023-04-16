import React from "react";
import Cards from "../components/Cards/Cards";

import "../styles/views/Home.scss";
import Search from "../components/Search/Search";

function Home() {
  return (
    <div className="home">
      <Search />
      <Cards />
    </div>
  );
}

export default Home;
