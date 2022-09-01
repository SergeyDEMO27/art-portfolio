import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainNav from "./MainNav";
import { INavElement } from "../types/types";
import "../styles/mainHeader.scss";

const MainHeader: React.FC = () => {
  const [navElements, setNavElements] = useState<INavElement[]>([
    { title: "characters", link: "characters" },
    { title: "landscapes", link: "landscapes" },
    { title: "about me", link: "about" },
    { title: "feedback", link: "feedback" },
  ]);

  return (
    <header className='main-header'>
      <div className='main-header__wrapper'>
        <NavLink style={{ color: "white" }} to='/'>
          ITS LOGO
        </NavLink>
        <MainNav navElements={navElements} />
      </div>
    </header>
  );
};

export default MainHeader;
