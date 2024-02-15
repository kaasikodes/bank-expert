import { Table } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";

const WalletsTable = () => {
  const { userWallets } = useGetGlobalInfo();

  return (
    <Table
      dataSource={userWallets}
      columns={[
        { title: "Name", render: (_, item) => <span>{item.name}</span> },
        { title: "Address", render: (_, item) => <span>{item.address}</span> },
      ]}
    />
  );
};

export default WalletsTable;
