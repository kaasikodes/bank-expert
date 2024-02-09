import { Button, Select } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import AddWallet from "modules/wallets/AddWallet";
import { useState } from "react";

const WalletSelector = () => {
  const [open, setOpen] = useState(false);
  const { selectedWallet, userWallets, handleWalletSelection } =
    useGetGlobalInfo();

  return (
    <>
      <AddWallet handleClose={() => setOpen(false)} open={open} />
      {userWallets.length === 0 && (
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Wallet
        </Button>
      )}
      {userWallets.length > 0 && (
        <Select
          value={selectedWallet?.address}
          options={userWallets.map((item) => ({
            value: item.address,
            label: item.name,
          }))}
          placeholder="Select Wallet"
          className="min-w-40"
          onSelect={(val) => handleWalletSelection(val)}
        />
      )}
    </>
  );
};

export default WalletSelector;
