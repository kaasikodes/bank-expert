import { ThemeConfig, theme } from "antd";
import { BiHome, BiNews, BiNotepad, BiWallet } from "react-icons/bi";
import { appRoutePath } from "routes/paths";
import { TThemeMode, EThemePrimaryColor } from "types";

export const APP_NAME = "BankXpert";

export const SIDE_BAR_LINKS = [
  {
    label: "Dashboard",
    icon: <BiHome />,
    link: appRoutePath.dashboard,
    disabled: false,
  },

  {
    label: "Reports",
    icon: <BiNotepad />,
    link: appRoutePath.report,
    disabled: true,
  },
  {
    label: "Wallets",
    icon: <BiWallet />,
    link: appRoutePath.wallet,
    disabled: true,
  },
  {
    label: "News",
    icon: <BiNews />,
    link: appRoutePath.news,
    disabled: true,
  },
];

export const antdThemeConfig = (
  mode: TThemeMode,
  color: EThemePrimaryColor
): ThemeConfig => {
  return mode === "dark"
    ? {
        algorithm: theme?.darkAlgorithm,
        // cssVar: true,

        token: {
          ...theme.defaultConfig.token,
          // fontFamily: "Sen, sans-serif",
          // colorPrimary: color,
        },
        components: {
          Layout: {
            // bodyBg: "#065897",
            bodyBg: "#141414",
          },
        },
      }
    : {
        // cssVar: true,

        token: {
          ...theme.defaultConfig.token,
          fontFamily: "Sen, sans-serif",
          colorPrimary: color,
        },
        components: {
          Layout: {
            bodyBg: "#fff",
            siderBg: "#F6F7FB",
            headerBg: "#fff",
          },
        },
      };
};
