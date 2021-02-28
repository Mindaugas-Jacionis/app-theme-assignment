import { useState, useLayoutEffect, useEffect } from "react";
import ThemeContext from "./context";

const AVAILABLE_THEMES = ["light", "dark", "purple"];

const STYLES_VARIABLES = {
  light: {
    "text-color": "#000000",
    "background-color": "#f1f1f1",
    "link-color": "rebeccapurple",
  },
  dark: {
    "text-color": "#ffffff",
    "background-color": "#282c34",
    "link-color": "#61dafb",
  },
  purple: {
    "text-color": "#000000",
    // LoL color names are getting crazier and crazier, actual color code is #663399
    "background-color": "rebeccapurple",
    // actual color code is #00ced1
    "link-color": "darkturquoise",
  },
};

const ThemeProvider = ({ children, initial }) => {
  const [theme, setThemeValue] = useState(
    localStorage.getItem("theme") || initial || "light"
  );

  const setTheme = (theme) => {
    const newTheme = AVAILABLE_THEMES.includes(theme) ? theme : "light";

    setThemeValue(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useLayoutEffect(() => {
    const styleVariables = STYLES_VARIABLES[theme];

    Object.entries(styleVariables).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--${name}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        allThemes: AVAILABLE_THEMES,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
