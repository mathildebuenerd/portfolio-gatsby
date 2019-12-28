import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
