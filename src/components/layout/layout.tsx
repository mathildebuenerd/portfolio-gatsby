import React from "react";
import Footer from "src/components/layout/footer/footer";
import Header from "src/components/layout/header/header";

import "./layout.scss";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
