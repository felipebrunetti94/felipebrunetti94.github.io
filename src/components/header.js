import * as React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__home">
        <Link to="/">Felipe Brunetti</Link>
      </div>
      {/* <nav>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav> */}
    </div>
  </header>
);

export default Header;
