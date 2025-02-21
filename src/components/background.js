import * as React from "react";
import Sky from "./sky";
import DarkClouds from "../assets/dark-clouds.svg";
import Clouds from "../assets/clouds.svg";

const Background = ({ children }) => (
  <div>
    <Sky />
    <DarkClouds className="dark-clouds" />
    <Clouds className="clouds" />
    {children}
  </div>
);

export default Background;
