import { ConfigProvider, theme } from "antd";

import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import ThemeContextProvider from "./ThemeContextProvider";
import { Chain, EthosConnectProvider } from "ethos-connect";
import ReactQueryProvider from "./ReactQueryProvider";
import GlobalContextProvider from "./GlobalContextProvider";
export { ThemeContextProvider };

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: Rename useHandleColorTheme to useTheme
  const { color, mode } = useHandleColorTheme();
  // TODO: Refactor Theme config to be in a constants folder
  return (
    <div color-theme={color} data-theme={mode}>
      <EthosConnectProvider
        ethosConfiguration={{
          hideEmailSignIn: true,
          // chain: Chain.SUI_DEVNET,
          // network: "https://fullnode.devnet.sui.io:443",
          // chain: Chain.SUI_MAINNET,
          // network: "https://fullnode.mainnet.sui.io:443",
          chain: Chain.SUI_TESTNET,
          network: "https://fullnode.testnet.sui.io:443",
        }}
      >
        <ConfigProvider
          theme={
            mode === "dark"
              ? {
                  algorithm: theme.darkAlgorithm,
                  cssVar: true,

                  token: {
                    fontFamily: "Sen, sans-serif",
                    colorPrimary: color,
                  },
                  components: {
                    Layout: {
                      // bodyBg: "#065897",
                      bodyBg: "#141414",
                    },
                  },
                }
              : {
                  cssVar: true,

                  token: {
                    fontFamily: "Sen, sans-serif",
                    colorPrimary: color,
                  },
                  components: {
                    Layout: {
                      bodyBg: "#fff",
                      siderBg: "#F6F7FB",
                      headerBg: "#fff",
                    },
                    // Button: {
                    //   colorPrimary: "red",
                    //   colorBgBase: "red",
                    //   colorBgContainer: "red",
                    //   colorFill: "red",
                    //   colorBgElevated: "red",
                    //   colorPrimaryBg: "red",
                    // },
                  },
                }
          }
        >
          <GlobalContextProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </GlobalContextProvider>
        </ConfigProvider>
      </EthosConnectProvider>
    </div>
  );
};
