import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    if (password === "1234") {
      setUser({ id: "123", email });
      navigate("/home");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticaded: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
