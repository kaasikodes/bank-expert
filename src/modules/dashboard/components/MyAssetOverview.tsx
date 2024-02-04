import { Button, Card, Skeleton, Typography } from "antd";
import useGetAssetOverview from "../hooks/useGetAssetOverview";
import { ethos } from "ethos-connect";
import { AiOutlineSync } from "react-icons/ai";

interface TToken {
  tokenName: string;
  tokenBalance: number;
  tokenSymbol: string;
  tokenIcon: string;
  contract: string;
}
const dummyTokens: TToken[] = [
  {
    tokenName: "Sui",
    tokenBalance: 100_000,
    tokenSymbol: "Sui",
    tokenIcon: "https://img.cryptorank.io/coins/sui1683272105699.png",
    contract: "0x2::sui::SUI",
  },
  {
    tokenName: "Suicune",
    tokenBalance: 80_000,
    tokenSymbol: "HSui",
    tokenIcon: "https://img.cryptorank.io/coins/suicune1706096720692.png",
    contract:
      "0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533::suicune::SUICUNE",
  },
  {
    tokenName: "FUD",
    tokenBalance: 40,
    tokenSymbol: "FUD",
    tokenIcon: "https://img.cryptorank.io/coins/fud1705417235582.png",
    contract:
      "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD",
  },
  {
    contract:
      "0x3cbae4efb916a6ff23eb4724f6fb5d37c5a342b689a6f308fa10acc944799f84::xui::XUI",
    tokenName: "YouSui",
    tokenBalance: 100_000,
    tokenSymbol: "XUI",
    tokenIcon: "https://img.cryptorank.io/coins/you_sui1690277759456.png",
  },
];

const MyAssetOverview = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
      {dummyTokens.map((item, i) => (
        <MyAssetCard item={item} key={i} />
      ))}
    </div>
  );
};
const MyAssetCard: React.FC<{ item: TToken; refresh?: boolean }> = ({
  item,
}) => {
  const { data, loading, handleRefresh } = useGetAssetOverview({
    coinType: item.contract,
  });

  return (
    <Card className="shadow-sm dark:shadow-sm dark:shadow-slate-800">
      <Skeleton loading={loading} paragraph={{ rows: 2 }}>
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src={item.tokenIcon}
              alt={item.tokenName}
              loading="lazy"
              className="h-12 mr-6 "
            />
            <Typography.Title level={4} className="relative top-2">
              {item.tokenName}
            </Typography.Title>
            <Button
              icon={
                <AiOutlineSync
                  className="text-sm h-3"
                  rotate={loading ? 180 : undefined}
                />
              }
              type="text"
              size="small"
              className=" ml-auto"
              disabled={loading}
              onClick={handleRefresh}
            />
          </div>
          <Typography.Title level={4}>
            {ethos.formatBalance(data.balance)}
          </Typography.Title>
        </div>
      </Skeleton>
    </Card>
  );
};
export default MyAssetOverview;
