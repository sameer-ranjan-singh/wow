import React, { createContext, useState } from "react";
import { ThemeEnum, ThemeVariantProps, themeVariantStyles } from "./Themes";

interface ThemeContextProps {
  themeName: ThemeEnum;
  themeStyle: ThemeVariantProps;
  toggleTheme: (theme: ThemeEnum) => void;
}

//create Context
export const ThemeContext = createContext<ThemeContextProps>({
  themeName: ThemeEnum.LIGHT,
  themeStyle: themeVariantStyles.light,
  toggleTheme: () => {},
});

//Theme Provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  const [themeStyle, setThemeStyle] = useState<ThemeVariantProps>(
    themeVariantStyles.light
  );

  const toggleTheme = (theme: ThemeEnum) => {
    setThemeName(theme);
    setThemeStyle(themeVariantStyles[theme]);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme, themeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};
