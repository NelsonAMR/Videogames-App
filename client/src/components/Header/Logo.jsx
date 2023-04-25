import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState, getGames } from "../../redux/actions";

import logo from "../../res/img/logo1.png";
import "../../styles/components/Header/Logo.scss";

function Logo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearState());
    dispatch(getGames());
    navigate("/home");
  };

  return (
    <div className="logo" onClick={handleClick}>
      <img src={logo} alt="logo" />
      <h3>GameProject</h3>
    </div>
  );
}

export default Logo;
