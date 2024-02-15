import { Modal, Button } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { TWallet } from "types";

type TProps = {
  open: boolean;
  handleClose: () => void;
  wallet: TWallet;
};
const DeleteWallet: React.FC<TProps> = ({ open, handleClose, wallet }) => {
  const { deleteUserWallet } = useGetGlobalInfo();
  const handleDelete = () => {
    deleteUserWallet(wallet.address);
    handleClose();
  };
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      title={`Delete Wallet`}
      footer={null}
    >
      <div className="flex flex-col items-center gap-6">
        <AiOutlineWarning className="text-8xl text-red-600" />

        <span className="text-base">{`Are you sure you want to delete ${wallet.name}!`}</span>
        <div className="mt-4 flex gap-x-4 items-center">
          <Button type="default" size="large" danger onClick={handleClose}>
            Cancel
          </Button>
          <Button type="primary" size="large" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWallet;
