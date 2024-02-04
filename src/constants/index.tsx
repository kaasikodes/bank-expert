import { BiHome, BiNews, BiNotepad, BiWallet } from "react-icons/bi";
import { appRoutePath } from "routes/paths";

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
