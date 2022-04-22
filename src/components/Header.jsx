import React from "react";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";
import MySelect from "./elements/MySelect";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="logo" to="/">
          <img
            className="logo__img"
            src={require("../assets/images/logo.jpg")}
            alt="logo"
          />
        </Link>
        <div className="header__right">
          <NavMenu />
          <div className="header__select">
            <MySelect />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
