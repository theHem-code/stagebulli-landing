import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Logo from "./Logo";


const Header = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="icons">
          <a href="https://www.instagram.com/stagebulli/" target="_blank">
            <i className="icon fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/stagebulli" target="_blank">
            <i className="icon fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
