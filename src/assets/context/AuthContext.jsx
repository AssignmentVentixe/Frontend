import { createContext } from "react";

const AuthContext = createContext({
  user: undefined,
  setUser: () => {},
});

export default AuthContext;
