import { Line } from "@ant-design/plots";
import { Typography, theme, Skeleton, Button, Empty } from "antd";
import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import useGetMyTransactions from "../hooks/useGetMyTransactions";
import { useGetTokenBalances } from "hooks/useGetTokenBalances";

const { useToken } = theme;

const MyTransactions = () => {
  const { token } = useToken();
  const { mode } = useHandleColorTheme();
  const { data: balances } = useGetTokenBalances();
  console.log(balances, "balances");
  const { data, loading, handleRefresh } = useGetMyTransactions();
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <Typography.Title level={5}>
          <span className="text-primary">My Transactions</span>
        </Typography.Title>
        <Button onClick={handleRefresh} disabled={loading}>
          Refresh
        </Button>
      </div>
      <Skeleton loading={loading} paragraph={{ rows: 20 }}>
        {data.length === 0 && (
          <div className="flex items-center justify-center pt-20">
            <Empty description="No Transactions" />
          </div>
        )}
        {data.length > 0 && (
          <Line
            {...{
              ...config,
              theme: mode === "dark" ? "classicDark" : "classic",
              // legend: {
              //   color: token.colorPrimary,
              // },
              // containerStyle: {
              //   // background: "red",
              //   // accentColor: "red",
              //   colorScheme: "revert-layer",
              // },
              // className: "bg-red-200 text-red-800",
              xAxis: {
                type: "time",
              },
              yAxis: {
                label: {
                  formatter: (v: string) =>
                    `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                },
              },
              colorField: token.colorPrimary,
            }}
          />
        )}
      </Skeleton>
    </div>
  );
};

export default MyTransactions;
