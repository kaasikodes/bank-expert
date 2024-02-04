import { EthosConnectStatus, ethos } from "ethos-connect";
import React from "react";
import { Navigate } from "react-router-dom";
import { appRoutePath } from "routes/paths";

const WalletConnectedMiddleware: React.FC<{
  children: React.ReactNode;
  disabled?: boolean;
}> = ({ children, disabled = false }) => {
  const { status } = ethos.useWallet();
  console.log(status);

  if (disabled) {
    return <>{children}</>;
  }

  if (status === EthosConnectStatus.Loading) {
    return <>loading ....</>;
  }
  if (status === EthosConnectStatus.NoConnection) {
    return <Navigate to={appRoutePath.connectWallet} replace />;
  }
  return <>{children}</>;
};

export default WalletConnectedMiddleware;
