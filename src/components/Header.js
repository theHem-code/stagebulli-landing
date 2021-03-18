import React from "react";
import logo from "../images/logo.png";
import logo_black from "../images/logo_black.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const myStyle = {
    color: 'black',
  };

   const renderColor = location.pathname === "/" ? null : myStyle
   const renderLogo = location.pathname === "/" ? logo : logo_black

  return (
    <div className="abc">
      <div className="nav">
        <Link to="/">
          <img src={renderLogo} alt="Logo" className="logo" />
        </Link>
        <div className="icons">
          <a href="https://www.instagram.com/stagebulli/" target="_blank" rel="noreferrer">
            <i className="icon fab fa-instagram" style={renderColor}></i>
          </a>
          <a href="https://www.facebook.com/stagebulli" target="_blank" rel="noreferrer">
            <i className="icon fab fa-facebook-f" style={renderColor}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
