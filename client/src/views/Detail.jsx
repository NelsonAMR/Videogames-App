import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gameDetail } from "../redux/actions";

import "../styles/views/Detail.scss";

function Detail() {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail">
      <div className="detail-cont">
        <div className="detail-img">
          <img src={detail?.image} alt={detail.name} />
        </div>
        <div className="detail-info">
          <h3 className="title">{detail.name}</h3>
          <h4>Plataformas</h4>
          <p>{detail.platforms?.join(", ")}</p>
          <h4>Generos</h4>
          <p>{detail.genres?.join(", ")}</p>
          <h4>Rating</h4>
          <p>{detail.rating}</p>
          <h4>Fecha de lanzamiento</h4>
          <p>{detail.released}</p>
        </div>
      </div>
      <div className="detail-desc">
        <h4>Descripcion</h4>
        <p>{detail.description}</p>
      </div>
    </div>
  );
}

export default Detail;
