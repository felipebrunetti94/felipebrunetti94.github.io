import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div class="main-container">
      <div class="sub-container">
        <div class="sky">
          <div class="stars"></div>
          <div class="stars2"></div>
          <div class="stars3"></div>
          <div class="comet"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
