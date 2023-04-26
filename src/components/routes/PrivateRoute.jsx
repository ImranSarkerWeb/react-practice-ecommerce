import React, { useContext } from "react";
import { UserContext } from "../providers/ContextProviders";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
