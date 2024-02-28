import { Button } from "antd";
import React, { useState } from "react";

import { IDivProps, TWallet } from "types";
import EditWallet from "./EditWallet";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteWallet from "./DeleteWallet";

type TAction = "edit" | "delete";
const WalletActions: React.FC<IDivProps & { wallet: TWallet }> = ({
  wallet,
  ...props
}) => {
  const [action, setAction] = useState<TAction>();
  const handleAction = (action: TAction) => {
    setAction(action);
  };
  const handleClose = () => {
    setAction(undefined);
  };
  return (
    <>
      <DeleteWallet
        wallet={wallet}
        handleClose={handleClose}
        open={action === "delete"}
      />
      <EditWallet
        wallet={wallet}
        handleClose={handleClose}
        open={action === "edit"}
      />
      <div {...{ ...props }}>
        <Button
          icon={<AiOutlineEdit />}
          type="text"
          onClick={() => handleAction("edit")}
        />
        <Button
          icon={<AiFillDelete />}
          type="text"
          danger
          onClick={() => handleAction("delete")}
        />
      </div>
    </>
  );
};

export default WalletActions;
