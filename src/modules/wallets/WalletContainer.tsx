import { Button, Typography } from "antd";
import WalletsTable from "./WalletsTable";
import { useState } from "react";
import AddWallet from "./AddWallet";

type TAction = "add-wallet";
const WalletContainer = () => {
  const [action, setAction] = useState<TAction>();
  const handleAction = (action: TAction) => {
    setAction(action);
  };
  const handleClose = () => {
    setAction(undefined);
  };
  return (
    <>
      <AddWallet open={action === "add-wallet"} handleClose={handleClose} />
      <div className="space-y-8">
        <Typography.Title level={3}>Wallets</Typography.Title>
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={() => handleAction("add-wallet")}>
              Add Wallet
            </Button>
          </div>
          <WalletsTable />
        </div>
      </div>
    </>
  );
};

export default WalletContainer;
