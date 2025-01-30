import React, { createContext, useState } from "react";
import { ThemeEnum, ThemeVariantProps, ThemeVariantStyles } from "./ThemeVariantStyles"

interface ThemeContextProps {
  themeName: ThemeEnum;
  themeStyle: ThemeVariantProps;
  toggleTheme: (theme: ThemeEnum) => void;
  showTheme: boolean;
  setShowTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

//create Context
export const ThemeContext = createContext<ThemeContextProps>({
  themeName: ThemeEnum.LIGHT,
  themeStyle: ThemeVariantStyles.light,
  toggleTheme: () => {},
  showTheme: false,
  setShowTheme: () => {},
});

//Theme Provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [showTheme, setShowTheme] = useState<true | false>(false);
  const [themeName, setThemeName] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  const [themeStyle, setThemeStyle] = useState<ThemeVariantProps>(ThemeVariantStyles.wow);

  const toggleTheme = (theme: ThemeEnum) => {
    setThemeName(theme);
    setThemeStyle(ThemeVariantStyles[theme]);
  };

  return (
    <ThemeContext.Provider
      value={{ themeName, toggleTheme, themeStyle, showTheme, setShowTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
