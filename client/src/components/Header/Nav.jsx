import React from "react";
import { Link } from "react-router-dom";

import "../../styles/components/Header/Nav.scss";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/home">Videojuegos</Link>
      <Link to="/form">Crear Juego</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </div>
  );
}

export default Nav;
