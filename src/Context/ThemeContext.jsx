import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  dark: "",
  color: "",
});

export function Theme({ children }) {
  return (
    <div>
      <ThemeContext.Provider value={{ red: "red", color: "primary" }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
