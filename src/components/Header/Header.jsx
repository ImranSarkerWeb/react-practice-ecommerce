import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/ContextProviders";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="tab">
        <Link to="/">Home</Link>
        <Link to="order">Order</Link>
        <Link to="manage-inventory">Inventory</Link>
        <Link to="signUp">Sign Up</Link>
        <Link to="login">Login</Link>
        {user && <>Welcome</>}
      </div>
    </nav>
  );
};

export default Header;
