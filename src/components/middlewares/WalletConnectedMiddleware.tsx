import React from "react";

const WalletConnectedMiddleware: React.FC<{
  children: React.ReactNode;
  disabled?: boolean;
}> = ({ children }) => {
  return <>{children}</>;
};

export default WalletConnectedMiddleware;
