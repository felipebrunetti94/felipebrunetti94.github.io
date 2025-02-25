import * as React from "react";
import "../styles/main.scss";
import Background from "./background";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Background>
      <Header />

      <div className="content">{children}</div>

      <Footer />
    </Background>
  );
};

export default Layout;
