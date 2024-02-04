import Dashboard from "modules/dashboard";
import Reports from "modules/reports";
import { ConnectWallet } from "modules/wallets";
import { appRoutePath } from "routes/paths";
import { TRouteData } from "routes/types";

export const appPages: TRouteData[] = [
  {
    element: <div />,
    path: appRoutePath.notFound,
    title: "Not Found",
  },
  {
    element: <ConnectWallet />,
    path: appRoutePath.connectWallet,
    title: "Connect Wallet",
    category: ["doesnt-require-wallet-connection"],
  },
  {
    element: <Dashboard />,
    path: appRoutePath.home,
    title: "Home",
  },
  {
    element: <Dashboard />,
    path: appRoutePath.dashboard,
    title: "Dashboard",
  },
  {
    element: <Reports />,
    path: appRoutePath.report,
    title: "Report",
    category: ["doesnt-require-wallet-connection"],
  },
  {
    element: <div />,
    path: appRoutePath.news,
    title: "News",
  },
  {
    element: <div />,
    path: appRoutePath.wallet,
    title: "Wallets",
  },
];
