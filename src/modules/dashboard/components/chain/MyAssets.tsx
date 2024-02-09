import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import { useGetTokenBalances } from "hooks/useGetTokenBalances";
import { TTokenBalance } from "repositories/BaseRepository";

const MyAssets = () => {
  const { data, isLoading } = useGetTokenBalances();
  const columns: ColumnsType<TTokenBalance> = [
    {
      title: "Name",
      render: (_, item) => <span>{item.tokenName}</span>,
    },
    {
      title: "Contract Address",
      render: (_, item) => <span>{item.tokenAddress}</span>,
    },
    {
      title: "Balance",
      render: (_, item) => <span>{item.tokenBalance}</span>,
    },
  ];
  return (
    <>
      <Table
        dataSource={data?.data.map((item) => ({
          ...item,
          key: item.tokenAddress,
        }))}
        columns={columns}
        loading={isLoading}
      />
    </>
  );
};

export default MyAssets;
