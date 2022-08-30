import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navItem.scss";

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, link }) => {
  return (
    <NavLink className='nav-item' to={`/${link}`}>
      {title}
    </NavLink>
  );
};

export default NavItem;
