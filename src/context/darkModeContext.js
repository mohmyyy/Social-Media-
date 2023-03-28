import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children }) => {
  const getDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(getDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };
  return (
    <DarkModeContext.Provider value={{darkMode,toggle}}>
      {children}
    </DarkModeContext.Provider>
  );
};
