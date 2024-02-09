import { GlobalContext } from "components/providers/GlobalContextProvider";
import { useContext } from "react";

const useGetGlobalInfo = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "useGetGlobalInfo must be used within a GlobalContextProvider"
    );
  }
  const {
    handleChainSelection,
    handleUserWallets,
    handleWalletSelection,
    selectedChain,
    selectedWallet,
    userWallets,
  } = context;
  return {
    handleChainSelection,
    handleUserWallets,
    handleWalletSelection,
    selectedChain,
    selectedWallet,
    userWallets,
  };
};

export default useGetGlobalInfo;
