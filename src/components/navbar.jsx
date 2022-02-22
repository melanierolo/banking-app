import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/context";

const Navbar = () => {
  const ctx = useContext(UserContext);

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
          <NavLink to="/login">
            <Button variant="light">Login</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
