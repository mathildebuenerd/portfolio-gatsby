import React from "react";
import { Link } from "gatsby";

const MainMenu: React.FC = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/page-2">Page 2</Link>
  </nav>
);

export default MainMenu;
