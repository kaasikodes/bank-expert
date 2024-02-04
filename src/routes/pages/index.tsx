import ComingSoon from "components/generic/ComingSoon";
import NotFound from "components/generic/NotFound";
import Dashboard from "modules/dashboard";
import { ConnectWallet } from "modules/wallets";
import { appRoutePath } from "routes/paths";
import { TRouteData } from "routes/types";

export const appPages: TRouteData[] = [
  {
    element: <NotFound />,
    path: appRoutePath.notFound,
    title: "Not Found",
    category: ["doesnt-require-wallet-connection"],
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
    element: <ComingSoon />,
    path: appRoutePath.report,
    title: "Report",
    category: ["doesnt-require-wallet-connection"],
  },
  {
    element: <ComingSoon />,
    path: appRoutePath.news,
    title: "News",
  },
  {
    element: <ComingSoon />,
    path: appRoutePath.wallet,
    title: "Wallets",
  },
];
