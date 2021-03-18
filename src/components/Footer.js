import React from "react";
import Hilde_Logo from "../images/hildebrandt-logo.jpeg";
import Birddogs_Logo from "../images/BIRDDOGS_Logo.png";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="container">
      <div className="row justify-content-center header">
        <div>
          <h3 className="col-12">In Kooperation mit</h3>
        </div>
      </div>
      <div className="row justify-content-center logos">
        <div className="d-flex justify-content-center">
          <img
            className="logo_birddogs"
            src={Birddogs_Logo}
            alt="Birddogs_Logo"
          />
          <img className="logo_hilde" src={Hilde_Logo} alt="Hildebrandt_Logo" />
        </div>
      </div>
      <div className="row justify-content-center header">
        <div>
          <h3 className="col-12">Kontakt</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="kontakt">
          <p>Felix Franke</p>
          <p>
            Fon <a href="tel:+491633010137">+49 163 301 01 37</a>
          </p>
          <br />
          <a href="mailto:mail@stagebulli.de">mail@stagebulli.de</a>
          <br />
          <a href="https://www.stagebulli.de">www.stagebulli.de</a>
          <div className="footer-end">
            <a href="https://www.instagram.com/stagebulli/" target="_blank" rel="noreferrer">
              <i className="icon-black fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/stagebulli" target="_blank" rel="noreferrer">
              <i className="icon-black fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <Link to="/datenschutz" className="imprint">Datenschutz</Link>
          <Link to="/impressum" className="imprint">Impressum</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
