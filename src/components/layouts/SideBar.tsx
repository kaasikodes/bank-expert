import { Divider, Layout, Menu, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { AppLogo } from "components/icons";
import ThemeSwitcher from "components/theme/ThemeSwitcher";
import { APP_NAME, SIDE_BAR_LINKS } from "constants";
import { NavLink, useMatches } from "react-router-dom";
import ToggleSideBar from "./ToggleSideBar";

const { Sider } = Layout;
const SideBar: React.FC<{
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showSideBar, setShowSideBar }) => {
  // set selected key to that that matches the route url
  const matches = useMatches();
  return (
    <>
      {
        <Sider
          className={`fixed ${
            showSideBar ? "" : "hidden"
          } lg:flex top-0 left-0 pt-4 h-[100vh] flex-col z-50 shadow-sm dark:shadow-md dark:shadow-slate-800`}
          style={{ position: "fixed" }}
        >
          <div className="lg:hidden flex justify-end px-4">
            <ToggleSideBar {...{ showSideBar, setShowSideBar }} />
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-x-2 items-center justify-center">
              <AppLogo className="h-8" />
              <Typography.Title level={4}>
                <span className="text-primary leading-none mt-1">
                  {APP_NAME}
                </span>
              </Typography.Title>
            </div>
            <div className="flex flex-col gap-8 justify-end px-4 pt-8 pb-4">
              <Menu
                mode="inline"
                className="bg-transparent shadow-none border-none"
                style={{ borderInlineEnd: "none", boxShadow: "none" }}
                items={SIDE_BAR_LINKS.map(
                  (item): MenuItemType => ({
                    key: item.link,
                    label: <NavLink to={item.link}>{item.label}</NavLink>,
                    icon: <NavLink to={item.link}>{item.icon}</NavLink>,
                    style: { marginBottom: "12px" },
                  })
                )}
                defaultSelectedKeys={matches.map((match) => match.pathname)}
                // TODO: Write a useEffect that will check url path and update selectedKeys
              />
            </div>
            <div className="mb-20 px-4 flex-1 flex flex-col justify-end">
              <Divider className="mb-4" />
              <ThemeSwitcher />
            </div>
          </div>
        </Sider>
      }
    </>
  );
};

export default SideBar;
