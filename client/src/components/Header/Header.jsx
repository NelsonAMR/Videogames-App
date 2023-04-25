// import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";

import "../../styles/components/Header/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-cont">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Header;
