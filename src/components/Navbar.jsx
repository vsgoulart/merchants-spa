import "../styles/Navbar.scss";

import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";

const Navbar = () => (
  <nav>
    <Link to="/">
      <img src={Logo} alt="" />
    </Link>
    <Link to="/merchants/new" className="new-merchant-button">
      New merchant
    </Link>
  </nav>
);

export default Navbar;
