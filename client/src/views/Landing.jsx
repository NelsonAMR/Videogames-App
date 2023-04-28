import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/views/Landing.scss";
import image from "../res/img/Build-your-own-controllers.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-cont">
        <div className="landing-info">
          <h1>GamesProyect</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            delectus aspernatur? Modi natus earum, ad fuga consequatur, animi
            quaerat accusamus repellat corporis ducimus vero mollitia non est
            libero impedit aut.
          </p>
          <button onClick={() => navigate("/home")} className="btn">
            Iniciar
          </button>
        </div>
        <div className="landing-image">
          <img src={image} alt="controles" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
