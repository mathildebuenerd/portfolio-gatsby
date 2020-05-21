import React from "react";

import "./footer.scss";

const cls = "footer";

const Footer: React.FC = () => (
  <footer className={cls}>
    <div>
      © {new Date().getFullYear()} Design & development by{" "}
      <strong>Mathilde Buenerd</strong>
    </div>
    <div>
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>
      Illustrations by <a href="https://www.gatsbyjs.org">Icon8</a>
    </div>
  </footer>
);

export default Footer;
