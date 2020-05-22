import React from "react";

import "./main-menu.scss";

const cls = "main-menu";

const MainMenu: React.FC = () => (
  <nav>
    <a className={cls + "__contact"} href="#contact">
      Contact
    </a>
  </nav>
);

export default MainMenu;
