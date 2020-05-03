import React from "react";
import { Link } from "gatsby";

import "./main-menu.scss";

const cls = "main-menu";

const MainMenu: React.FC = () => (
  <nav>
    <Link className={cls + "__contact"} to="#contact">
      Contact
    </Link>
  </nav>
);

export default MainMenu;
