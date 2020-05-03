import React from "react";
import MainMenu from "src/components/layout/header/main-menu/main-menu";

import "./header.scss";

const cls = "header";

const Header: React.FC = () => (
  <header className={cls}>
    <div className={cls + "__logo"}>
      <i className="fas fa-laptop-code"></i>
      <span>MB</span>
    </div>
    <MainMenu />
  </header>
);

export default Header;
