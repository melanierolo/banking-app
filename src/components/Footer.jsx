import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
/**/

const Footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <NavLink className="footer__logo" to="/">
          BankApp.
        </NavLink>
        <NavLink className="footer__link0" to="/">
          Home
        </NavLink>
        <NavLink className="footer__link1" to="/createaccount">
          Create Account
        </NavLink>
        <NavLink className="footer__link2" to="/deposit">
          Deposit
        </NavLink>
        <NavLink className="footer__link3" to="/withdraw">
          Withdraw
        </NavLink>
        <NavLink className="footer__link4" to="/alldata">
          Alldata
        </NavLink>
        <div className="footer__copyright">
          © 2021 Copyright, All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
