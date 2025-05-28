import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import api from "../../services/authApi";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err.response?.status === 401) {
          setUser(null);
        } else {
          console.error(err);
          setUser(null);
        }
      });
  }, []);

  console.log("AuthProvider: User state initialized:", user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
