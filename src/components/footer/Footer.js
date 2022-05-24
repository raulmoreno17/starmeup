import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__items-container">
        <span className="footer__item">About StarMeUp ▼</span>
        <div className="footer__divider"></div>
        <span className="footer__item">Quick Tour</span>
        <div className="footer__divider"></div>
        <span className="footer__item">Language ▼</span>
        <div className="footer__divider"></div>
        <span className="footer__item">Cookies</span>
        <div className="footer__divider--dot">·</div>
        <span className="footer__item">
          Developed by <strong>Globant</strong>
        </span>
        
      </div>
      <div className="footer__brand">
          <img src={require("../../assets/globant.png")} alt="SVG"></img>
        </div>
    </div>
  );
}

export default Footer;
