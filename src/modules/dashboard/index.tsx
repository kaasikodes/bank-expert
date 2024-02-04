import MyTransactions from "./components/MyTransactions";
import MyAssetOverview from "./components/MyAssetOverview";

const Dashboard = () => {
  return (
    <div className="text-accent space-y-8">
      <MyAssetOverview />
      <MyTransactions />
    </div>
  );
};

export default Dashboard;
