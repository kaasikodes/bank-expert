import ChainSelector from "components/global/ChainSelector";
import WalletSelector from "components/global/WalletSelector";
import MyAssets from "./components/chain/MyAssets";

const Dashboard = () => {
  return (
    <div className="text-accent space-y-8">
      <div className="flex justify-end gap-x-4">
        <ChainSelector />
        <WalletSelector />
      </div>
      <MyAssets />
      {/* <MyAssetOverview />
      <MyTransactions /> */}
    </div>
  );
};

export default Dashboard;
