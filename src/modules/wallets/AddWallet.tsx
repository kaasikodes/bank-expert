import { Button, Form, Input, Modal } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import React from "react";

// TODO: Refactor all wallet components to a components folder
type TProps = {
  open: boolean;
  handleClose: () => void;
};
// wallet?.address ?? "0xA476Aa3f01c5100CFFb29F53A08874A37bEE6555",
//   wallet?.address ?? "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
type TWalletFormProps = { name: string; address: string };
const AddWallet: React.FC<TProps> = ({ open, handleClose }) => {
  const [form] = Form.useForm<TWalletFormProps>();
  const { addUserWallets } = useGetGlobalInfo();
  const handleSubmit = (props: TWalletFormProps) => {
    addUserWallets([props]);
    form.resetFields();
    handleClose();
  };
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      title={"Add Wallet"}
    >
      <Form form={form} onFinish={handleSubmit}>
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

export default AddWallet;
