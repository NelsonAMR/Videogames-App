import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getGames } from "../../redux/actions";
import Card from "./Card";
import "../../styles/components/Cards/Cards.scss";

function Cards() {
  const { games } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className="cards">
      {games?.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.image}
          genres={game.genres}
        />
      ))}
    </div>
  );
}

export default Cards;
