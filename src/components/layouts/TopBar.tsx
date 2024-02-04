import { Button, Layout } from "antd";
import { SettingIcon, NotificationIcon, AppLogo } from "components/icons";
import UserProfileDropdown from "./UserProfileDropdown";
import ModeSwitcher from "components/theme/ModeSwitcher";
import ToggleSideBar from "./ToggleSideBar";

const { Header } = Layout;
export const TopBar: React.FC<{
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showSideBar, setShowSideBar }) => {
  return (
    <Header
      style={{ position: "fixed" }}
      className="left-0 shadow-sm dark:shadow-md dark:shadow-slate-800 flex w-full justify-between lg:justify-end items-center z-10 top-0 lg:px-4 px-4"
    >
      <AppLogo className="h-8 lg:hidden" />
      <div className="flex lg:gap-x-4 gap-x-1  items-center">
        <ToggleSideBar
          {...{ showSideBar, setShowSideBar }}
          className="lg:hidden"
        />
        <ModeSwitcher />
        <Button
          type="text"
          size="large"
          icon={<SettingIcon className="h-5 w-5 lg:h-6 lg:w-6" />}
          disabled
        />
        <Button
          type="text"
          size="large"
          icon={
            <NotificationIcon isNotified className="h-5 w-5 lg:h-6 lg:w-6" />
          }
          disabled
        />
        <UserProfileDropdown />
      </div>
    </Header>
  );
};
