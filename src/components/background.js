import * as React from "react";
import Sky from "./sky";

const Background = ({ children }) => (
  <div className="layout">
    <Sky />
    {children}
  </div>
);

export default Background;
