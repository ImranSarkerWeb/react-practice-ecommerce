import React, { createContext } from "react";

export const UserContext = createContext(null);
const ContextProviders = ({ children }) => {
  const user = { displayName: "Imran" };
  const contextInfo = {
    user,
  };
  return (
    <UserContext.Provider value={contextInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProviders;
