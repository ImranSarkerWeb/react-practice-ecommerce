import React, { useState } from "react";
import "./SignUP.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Your Password did Not match");
      return;
    } else if (password.length < 6) {
      setError("Password at least 6 characters or longer");
      return;
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <p className="text-error">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
        <p className="message">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
