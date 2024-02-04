import { ColumnsType } from "antd/es/table";
import useGetCurrencies, { TCurrency } from "../hooks/useGetCurrencies";
import { Table } from "antd";

const ReportTable = () => {
  const { data, loading } = useGetCurrencies();
  const columns: ColumnsType<TCurrency> = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (_, item) => <span className="capitalize">{item.name} </span>,
    },
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (_, item) => <span className="capitalize">{item.id} </span>,
    },
  ];
  return (
    <Table
      loading={loading}
      dataSource={data?.map((item, i) => ({ ...item, key: i }))}
      columns={columns}
    />
  );
};

export default ReportTable;
