import React from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import "../../styles/components/Cards/Cards.scss";

function Cards() {
  const { games } = useSelector((state) => state.games);
  const { page, size } = useSelector((state) => state.app);

  const startIndex = (page - 1) * size;
  const endIndex = page * size;

  return (
    <div className="cards">
      {games
        .slice(startIndex, endIndex)
        ?.map((game) =>
          game ? (
            <Card
              key={game?.id}
              id={game?.id}
              name={game?.name}
              image={game?.image}
              genres={game?.genres}
              rating={game?.rating}
            />
          ) : null
        )}
    </div>
  );
}

export default Cards;
