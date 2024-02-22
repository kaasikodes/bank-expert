import { ConfigProvider, } from "antd";

import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import ThemeContextProvider from "./ThemeContextProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import GlobalContextProvider from "./GlobalContextProvider";
import { antdThemeConfig } from "_constants";
export { ThemeContextProvider };

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: Rename useHandleColorTheme to useTheme
  const { color, mode } = useHandleColorTheme();

  // TODO: Refactor Theme config to be in a constants folder
  return (
    <div color-theme={color} data-theme={mode}>
      <GlobalContextProvider>
        <ConfigProvider theme={antdThemeConfig(mode, color)}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ConfigProvider>
      </GlobalContextProvider>
    </div>
  );
};
