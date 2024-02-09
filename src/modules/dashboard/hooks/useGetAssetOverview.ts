import { ETHOS_WALLET_ADDRESS } from "constants";
import { ethos } from "ethos-connect";
import { useState, useEffect } from "react";
type TProps = { coinType: string };
const useGetAssetOverview = (props: TProps) => {
  const [data, setData] = useState<{ balance: number }>({ balance: 0 });
  const [refresh, setRefesh] = useState(false);
  const [loading, setLoading] = useState(false);
  const { client } = ethos.useWallet();
  useEffect(() => {
    asyncClient(props);
  }, [refresh]);
  const handleRefresh = () => {
    setRefesh((prev) => !prev);
  };

  const asyncClient = async ({ coinType }: TProps) => {
    setLoading(true);
    const coin = await client?.getBalance({
      owner: ETHOS_WALLET_ADDRESS,
      coinType,
    });

    setData(() => ({ balance: coin?.totalBalance ? +coin.totalBalance : 0 }));
    setLoading(false);
  };
  return {
    data,
    loading,
    handleRefresh,
  };
};

export default useGetAssetOverview;
