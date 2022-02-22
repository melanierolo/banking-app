import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <li className="leftSide">
          <NavLink to="/">BankApp.</NavLink>
        </li>
        <div id="Links" className="rightSide">
          <NavLink to="/createaccount" activeClassName="active">
            Create Account
          </NavLink>
          <NavLink to="/deposit" activeClassName="active">
            Deposit
          </NavLink>
          <NavLink to="/withdraw" activeClassName="active">
            Withdraw
          </NavLink>
          <NavLink to="/alldata" activeClassName="active">
            Alldata
          </NavLink>
          <Button to="/login" variant="light">
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
