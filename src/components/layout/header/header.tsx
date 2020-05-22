import React from "react";
import { FaLaptopCode } from "react-icons/fa";

import MainMenu from "src/components/layout/header/main-menu/main-menu";

import "./header.scss";

const cls = "header";

const Header: React.FC = () => (
  <header className={cls}>
    <div className={cls + "__logo"}>
      <div className={cls + "__icon"}>
        <FaLaptopCode />
      </div>
      <span>
        <span className={cls + "__bold"}>Mathilde</span> Buenerd
      </span>
    </div>
    <MainMenu />
  </header>
);

export default Header;
