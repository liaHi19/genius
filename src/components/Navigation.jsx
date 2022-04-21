import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink className="menu__link" to="/">
            Preise
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" to="/referenzen">
            Referenzen
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
