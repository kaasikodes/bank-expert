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
  addUserWallets: (wallets: TWallet[]) => void;
  editUserWallet: (wallet: TWallet) => void;
  deleteUserWallet: (walletAddress: string) => void;
}
export const GlobalContext = createContext<IGlobalContextProps>({
  selectedChain: ESupportedChains.ETHEREUM_MAINNET,
  handleChainSelection: () => {},
  handleWalletSelection: () => {},
  addUserWallets: () => {},
  userWallets: [],
  editUserWallet: () => {},
  deleteUserWallet: () => {},
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
  const deleteUserWallet = (walletAddress: string) => {
    const wallets = userWallets.filter((wallet) => {
      return wallet.address !== walletAddress;
    });
    setUserWallets(wallets);
    const walletsAsJSON = JSON.stringify([...wallets]);
    localStorage.setItem(LOCAL_STORAGE_KEY_FOR_WALLETS, walletsAsJSON);
  };
  const editUserWallet = (_wallet: TWallet) => {
    const wallets = userWallets.map((wallet) => {
      if (wallet.address === _wallet.address) {
        return _wallet;
      }
      return wallet;
    });
    setUserWallets(wallets);
    const walletsAsJSON = JSON.stringify([...wallets]);
    localStorage.setItem(LOCAL_STORAGE_KEY_FOR_WALLETS, walletsAsJSON);
  };
  const addUserWallets = (_wallets: TWallet[]) => {
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
        addUserWallets,
        editUserWallet,
        deleteUserWallet,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
