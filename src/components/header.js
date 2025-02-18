import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <Link to="/">Felipe Brunetti</Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
