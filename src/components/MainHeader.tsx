import React, { useState } from "react";
import MainNav from "./MainNav";
import { INavElement } from "../types/types";
import "../styles/mainHeader.scss";

const MainHeader: React.FC = () => {
  const [navElements, setNavElements] = useState<INavElement[]>([
    { title: "main", link: "main" },
    { title: "characters", link: "characters" },
    { title: "landscapes", link: "landscapes" },
    { title: "about me", link: "about" },
    { title: "feedback", link: "feedback" },
  ]);

  return (
    <header className='main-header'>
      <div className='main-header__wrapper'>
        <MainNav navElements={navElements} />
      </div>
    </header>
  );
};

export default MainHeader;
