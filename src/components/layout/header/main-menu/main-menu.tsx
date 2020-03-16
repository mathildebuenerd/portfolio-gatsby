import React from "react";
import { Link } from "gatsby";

const MainMenu: React.FC = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default MainMenu;
