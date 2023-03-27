import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="tab">
          <li>
            <a href="/order">Order</a>
          </li>
          <li>
            <a href="/order-preview">Order Preview</a>
          </li>
          <li>
            <a href="/manage-inventory">Manage Inventory</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
