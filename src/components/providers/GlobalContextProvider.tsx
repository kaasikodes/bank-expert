import React, { createContext, useEffect, useState } from "react";
import { ESupportedChains, TWallet } from "types";

const LOCAL_STORAGE_KEY_FOR_WALLETS = "wallets";
interface IProps {
  children: React.ReactNode;
}
interface IGlobalContextProps {
  selectedChain: ESupportedChains;
  selectedWallet?: TWallet;
  userWallets: TWallet[];
  handleChainSelection: (chain: ESupportedChains) => void;
  handleWalletSelection: (walletAddress: string) => void;
  handleUserWallets: (wallets: TWallet[]) => void;
}
export const GlobalContext = createContext<IGlobalContextProps>({
  selectedChain: ESupportedChains.ETHEREUM_MAINNET,
  handleChainSelection: () => {},
  handleWalletSelection: () => {},
  handleUserWallets: () => {},
  userWallets: [],
});
const GlobalContextProvider = ({ children }: IProps) => {
  const [selectedChain, setSelectedChain] = useState<ESupportedChains>();
  const [selectedWallet, setSelectedWallet] = useState<TWallet>();
  const [userWallets, setUserWallets] = useState<TWallet[]>([]);
  useEffect(() => {
    const _locallyStoredWallets = localStorage.getItem(
      LOCAL_STORAGE_KEY_FOR_WALLETS
    );
    const locallyStoredWallets = (_locallyStoredWallets
      ? JSON.parse(_locallyStoredWallets)
      : []) as unknown as TWallet[];
    if (locallyStoredWallets?.length > 0) {
      setUserWallets(locallyStoredWallets);
      setSelectedWallet(locallyStoredWallets[0]);
    }
    setSelectedChain(ESupportedChains.ETHEREUM_MAINNET);
  }, [setSelectedChain]);

  const handleChainSelection = (chain: ESupportedChains) => {
    setSelectedChain(chain);
  };
  const handleWalletSelection = (walletAddress: string) => {
    const wallet = userWallets?.find(
      (wallet) => wallet.address === walletAddress
    );
    setSelectedWallet(wallet);
  };
  const handleUserWallets = (_wallets: TWallet[]) => {
    setUserWallets((wallets) => [...wallets, ..._wallets]);
    const _locallyStoredWallets = localStorage.getItem(
      LOCAL_STORAGE_KEY_FOR_WALLETS
    );
    const locallyStoredWallets = (_locallyStoredWallets
      ? JSON.parse(_locallyStoredWallets)
      : []) as unknown as TWallet[];
    const walletsAsJSON = JSON.stringify([
      ...locallyStoredWallets,
      ..._wallets,
    ]);
    localStorage.setItem(LOCAL_STORAGE_KEY_FOR_WALLETS, walletsAsJSON);
  };
  return (
    <GlobalContext.Provider
      value={{
        selectedChain: selectedChain ?? ESupportedChains.ETHEREUM_MAINNET,
        selectedWallet,
        userWallets,
        handleChainSelection,
        handleWalletSelection,
        handleUserWallets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
