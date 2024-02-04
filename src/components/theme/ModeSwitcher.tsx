import { Button } from "antd";
import { MoonIcon } from "components/icons";
import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import { IoIosSunny } from "react-icons/io";

const ModeSwitcher = () => {
  const { mode, handleModeSwitch } = useHandleColorTheme();
  return (
    <>
      {mode === "light" ? (
        <Button
          type="text"
          size="large"
          icon={<MoonIcon className="h-6 w-6" />}
          onClick={() => handleModeSwitch("dark")}
        />
      ) : null}
      {mode === "dark" ? (
        <Button
          type="text"
          size="large"
          icon={<IoIosSunny className="h-6 w-6" />}
          onClick={() => handleModeSwitch("light")}
        />
      ) : null}
    </>
  );
};

export default ModeSwitcher;
