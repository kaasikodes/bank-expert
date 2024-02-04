import BrokenPiggyBankIcon from "components/icons/BrokenPiggyBankIcon";
import { EthosConnectStatus, SignInButton, ethos } from "ethos-connect";
import { Navigate, useMatch } from "react-router-dom";
import { appRoutePath } from "routes/paths";

const ConnectWallet = () => {
  const pathIsAMatch = useMatch(appRoutePath.connectWallet);
  const { status } = ethos.useWallet();
  if (
    status === EthosConnectStatus.Connected &&
    !!pathIsAMatch &&
    pathIsAMatch.pathname === appRoutePath.connectWallet
  ) {
    return <Navigate to={appRoutePath.dashboard} replace />;
  }
  return (
    <div className="text-accent flex flex-col items-center justify-start">
      <BrokenPiggyBankIcon className="relative -top-28" />
      <SignInButton
        children={
          <h1 className="px-3 text-lg relative -top-44 py-2 rounded-md border border-primary text-primary hover:text-accent hover:border-accent  font-medium bg-transparent transition ease-in-out duration-500  tracking-wider">
            Please Connect Wallet on Sui Mainnet
          </h1>
        }
      />
    </div>
  );
};

export default ConnectWallet;
