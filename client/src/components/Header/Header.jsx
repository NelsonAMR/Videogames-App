// import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";

import "../../styles/components/Header/Header.scss";

function Header() {
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   console.log(window.scrollY);

  //   if (window.scrollY > 0) {
  //     setIsActive(true);
  //   }
  // }, [window]);

  return (
    // <div className={`header ${isActive && "active"}`}>
    <div className="header">
      <div className="header-cont">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Header;
