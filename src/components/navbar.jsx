import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <li className="leftSide">
          <NavLink to="/">BankApp.</NavLink>
        </li>
        <div id="Links" className="rightSide">
          <NavLink to="/createaccount">Create Account</NavLink>
          <NavLink to="/deposit">Deposit</NavLink>
          <NavLink to="/withdraw">Withdraw</NavLink>
          <NavLink to="/alldata">Alldata</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
