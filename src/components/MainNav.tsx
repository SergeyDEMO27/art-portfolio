import React from "react";
import NavItem from "./NavItem";
import { INavElement } from "../types/types";

interface MainNavProps {
  navElements: INavElement[];
}

const MainNav: React.FC<MainNavProps> = ({ navElements }) => {
  return (
    <nav className='main-nav'>
      {navElements.length &&
        navElements.map(({ title, link }) => {
          return <NavItem title={title} link={link} key={title} />;
        })}
    </nav>
  );
};

export default MainNav;
