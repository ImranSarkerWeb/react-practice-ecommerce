import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../providers/ContextProviders";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeDropper,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p className="show-pass" onClick={() => setShow(!show)}>
            {show ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p className="message">
          New to Ema-john? <Link to="/signUp">Create New Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
