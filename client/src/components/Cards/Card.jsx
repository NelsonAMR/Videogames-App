import React from "react";
import "../../styles/components/Cards/Card.scss";

function Card({ image, name, genres }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>

      <div className="card-info">
        <h3>{name}</h3>

        <div className="card-genres">
          {genres.map((genre, i) => (
            <p key={i}>{genre}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
