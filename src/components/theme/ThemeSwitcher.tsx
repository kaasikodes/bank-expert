import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import React from "react";
import { EThemePrimaryColor } from "types";

const ThemeSwitcher: React.FC = () => {
  const THEME_COLORS: EThemePrimaryColor[] = [
    EThemePrimaryColor.DEFAULT,
    EThemePrimaryColor.BLUE,
    EThemePrimaryColor.GREEN,
    EThemePrimaryColor.ORANGE,
    EThemePrimaryColor.PURPLE,
  ];
  const { handleThemeSwitch } = useHandleColorTheme();
  return (
    <>
      {" "}
      <h5 className="font-bold text-left text-sm pb-4 pt-4">Change Theme</h5>
      <div className="flex items-center gap-4 ">
        {THEME_COLORS.map((color, i) => (
          <div
            key={i}
            className="h-4 w-4 rounded-full cursor-pointer"
            style={{ background: color }}
            onClick={() => handleThemeSwitch(color)}
          />
        ))}
      </div>
    </>
  );
};

export default ThemeSwitcher;
