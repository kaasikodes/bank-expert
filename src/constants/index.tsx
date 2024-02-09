import { BiHome, BiNews, BiNotepad, BiWallet } from "react-icons/bi";
import { appRoutePath } from "routes/paths";

export const APP_NAME = "BankXpert";
export const ETHOS_WALLET_ADDRESS =
  "0x03a198fbed30e508d56df01ea7f7b5b5b05a08ff7c64994d20f4d7ee109f23bd"; //sui
// export const ETHOS_WALLET_ADDRESS =
//   "0x3ad292fd737b6de130c8f6ad451091ae6a719800fcc4a0ef6430252d59f6c7b4"; // ethos
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
