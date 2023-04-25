import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/components/Cards/Card.scss";

function Card({ image, name, genres, id, rating }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/detail/${id}`);

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-img">
        <img src={image} alt={name} />
      </div>

      <div className="card-cont">
        <div className="card-info">
          <h3>{name}</h3>

          <div className="card-genres">
            {genres?.map((genre, i) => (
              <p key={i}>{genre}</p>
            ))}
          </div>
        </div>
        <div className="card-rating">
          <p
            className={
              rating > 80
                ? "rating-100"
                : rating > 60
                ? "rating-80"
                : "rating-60"
            }
          >
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
