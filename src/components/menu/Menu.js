import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuInfo } from "../../control";

import "./menu.scss";
const Menu = ({ className, mobMenu, menuOpen, setMenuOpen }) => {
  const menuItems = menuInfo.map((item, index) => {
    return (
      <li className="menu__item" key={index}>
        <NavLink
          end
          className={({ isActive }) =>
            "menu__link" + (isActive ? " active" : "")
          }
          to={item.href}
          onClick={() => {
            if (mobMenu) {
              setMenuOpen(false);
            }
          }}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });
  const menuClassName = `menu ${className} ${mobMenu ? "menu__mobile" : null} ${
    menuOpen ? "active" : null
  }`;
  return <ul className={menuClassName}> {menuItems} </ul>;
};
export default Menu;
