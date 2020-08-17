import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container headerContainer">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AIDAD. </a>
          </div>
          <div className="nav">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
