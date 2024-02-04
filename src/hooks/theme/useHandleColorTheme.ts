import { ThemeContext } from "components/providers/ThemeContextProvider";
import { useContext } from "react";

const useHandleColorTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useHandleColorTheme must be used within a ThemeContextProvider"
    );
  }
  const { color, handleThemeSwitch, handleModeSwitch, mode } = context;
  return { color, handleThemeSwitch, mode, handleModeSwitch };
};

export default useHandleColorTheme;
