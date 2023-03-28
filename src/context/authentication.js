import { createContext, useEffect, useState } from "react";


export const authContext = createContext({});

const authProvider = ({ children }) => {
  const getAuthentication = JSON.parse(localStorage.getItem("login")) || false;
  const [auth, setAuth] = useState(getAuthentication);

  useEffect(() => {
    localStorage.setItem("login", auth);
  }, [auth]);

  const login = () => {};

  return (
    <authContext.Provider value={{ auth, login }}>
      {children}
    </authContext.Provider>
  );
};

export default authProvider