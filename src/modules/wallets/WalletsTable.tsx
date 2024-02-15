import { Table } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import WalletActions from "./WalletActions";

const WalletsTable = () => {
  const { userWallets } = useGetGlobalInfo();

  return (
    <Table
      dataSource={userWallets}
      columns={[
        { title: "Name", render: (_, item) => <span>{item.name}</span> },
        { title: "Address", render: (_, item) => <span>{item.address}</span> },
        { title: "", render: (_, item) => <WalletActions wallet={item} /> },
      ]}
    />
  );
};

export default WalletsTable;
