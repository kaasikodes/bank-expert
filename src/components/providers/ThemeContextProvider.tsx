import React, { createContext, useEffect, useState } from "react";
import { EThemePrimaryColor, TThemeMode } from "types";

interface IProps {
  children: React.ReactNode;
}
interface IThemeContextProps {
  color: EThemePrimaryColor;
  mode: TThemeMode;
  handleThemeSwitch: (color: EThemePrimaryColor) => void;
  handleModeSwitch: (color: TThemeMode) => void;
}
export const ThemeContext = createContext<IThemeContextProps>({
  color: EThemePrimaryColor.DEFAULT,
  mode: "light",
  handleThemeSwitch: () => {},
  handleModeSwitch: () => {},
});
const ThemeContextProvider = ({ children }: IProps) => {
  const [mode, setMode] = useState<TThemeMode>("dark");
  const [primary, setPrimary] = useState<EThemePrimaryColor>(
    EThemePrimaryColor.DEFAULT
  );
  useEffect(() => {
    if (
      localStorage.getItem("primary") === null &&
      localStorage.getItem("mode") === null
    ) {
      // color

      localStorage.setItem("primary", EThemePrimaryColor.DEFAULT);
      setPrimary(EThemePrimaryColor.DEFAULT);
      // mode
      localStorage.setItem("mode", "light");
      setMode("light");
      return;
    }

    // color
    setPrimary(localStorage.getItem("primary") as EThemePrimaryColor);
    // mode
    setMode(localStorage.getItem("mode") as TThemeMode);
  }, []);
  const handleThemeSwitch = (color: EThemePrimaryColor) => {
    setPrimary(color);
    localStorage.setItem("primary", color);
  };
  const handleModeSwitch = (mode: TThemeMode) => {
    setMode(mode);
    localStorage.setItem("mode", mode);
    // TODO: Refactor the local storage keys to constants as opposed to magic values
  };
  return (
    <ThemeContext.Provider
      value={{ color: primary, handleThemeSwitch, mode, handleModeSwitch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
