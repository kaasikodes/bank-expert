import { Button, Form, Input, Modal } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import React from "react";
import { TWallet } from "types";

type TProps = {
  open: boolean;
  handleClose: () => void;
  wallet: TWallet;
};
// wallet?.address ?? "0xA476Aa3f01c5100CFFb29F53A08874A37bEE6555",
//   wallet?.address ?? "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
type TWalletFormProps = { name: string; address: string };
const EditWallet: React.FC<TProps> = ({ open, handleClose, wallet }) => {
  const [form] = Form.useForm<TWalletFormProps>();
  const { editUserWallet } = useGetGlobalInfo();
  const handleSubmit = (props: TWalletFormProps) => {
    editUserWallet({ ...wallet, ...props });
    form.resetFields();
    handleClose();
  };
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      title={"Edit Wallet"}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={wallet}>
        <Form.Item name={`name`}>
          <Input placeholder="Wallet Name" />
        </Form.Item>
        <Form.Item name={`address`}>
          <Input.TextArea placeholder="Wallet Address" />
        </Form.Item>
        <div className="flex justify-end">
          <Button htmlType="submit" type="primary">
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditWallet;
