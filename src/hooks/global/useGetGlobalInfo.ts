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
    addUserWallets,
    handleWalletSelection,
    selectedChain,
    selectedWallet,
    userWallets,
    editUserWallet,
    deleteUserWallet,
  } = context;
  return {
    handleChainSelection,
    addUserWallets,
    handleWalletSelection,
    selectedChain,
    selectedWallet,
    userWallets,
    editUserWallet,
    deleteUserWallet,
  };
};

export default useGetGlobalInfo;
