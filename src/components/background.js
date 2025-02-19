import * as React from "react";
import Sky from "./sky";

const Background = ({ children }) => (
  <div className="main-container">
    <Sky />
    {children}
  </div>
);

export default Background;
