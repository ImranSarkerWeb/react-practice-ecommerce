import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/ContextProviders";

const Login = () => {
  const { signIn } = useContext(UserContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
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
          <input type="password" name="password" id="" required />
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
