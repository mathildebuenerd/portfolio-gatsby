import React from "react";

const Footer: React.FC = () => (
  <footer>
    © {new Date().getFullYear()}, Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    Illustrations by <a href="https://www.gatsbyjs.org">Icon8</a>
  </footer>
);

export default Footer;
