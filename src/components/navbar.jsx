import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
/**/

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="leftSide">
          <h1>LOGO</h1>
        </div>
        <div id="Links" className="rightSide"></div>
      </div>
    </>
  );
};

export default Navbar;
