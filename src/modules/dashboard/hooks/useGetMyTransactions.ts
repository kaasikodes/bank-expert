import { ETHOS_WALLET_ADDRESS } from "_constants";
import { ethos } from "ethos-connect";
import { useEffect, useState } from "react";
type TLineData = {
  year: string;
  value: number;
  category: string;
};
const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
const useGetMyTransactions = () => {
  const [refresh, setRefesh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TLineData[]>([]);
  const { client } = ethos.useWallet();
  const handleRefresh = () => {
    setRefesh((prev) => !prev);
  };
  useEffect(() => {
    asyncClient();
  }, [refresh]);

  const asyncClient = async (): Promise<TLineData[]> => {
    setLoading(true);

    const coins = await client?.getCoins({
      owner: ETHOS_WALLET_ADDRESS,
      coinType: "0x2::sui::SUI",
    });
    const transactionInfo = await client?.queryTransactionBlocks({
      filter: {
        ToAddress: ETHOS_WALLET_ADDRESS,
        // FromAddress: wallet.address,
      },
      options: {
        showBalanceChanges: true,
        showObjectChanges: true,
        showEffects: true,
        showEvents: true,
        showInput: true,
        showRawInput: true,
      },
      order: "ascending",
    });
    console.log("coins", coins);
    const coinsData = coins?.data ?? [];
    const transactionsData = transactionInfo?.data ?? [];
    console.log("coins data", coinsData, "coins data", transactionsData);
    const lineData: TLineData[] =
      transactionsData?.map((transaction): TLineData => {
        return {
          category: transaction.balanceChanges?.[0].coinType ?? "",
          value: +ethos.formatBalance(
            -(
              transaction?.balanceChanges?.reduce((acc, current) => {
                return acc + current.amount.indexOf("-") === 1
                  ? 0
                  : +current.amount;
              }, 0) ?? 0
            )
          ),

          year: formatDate(+(transaction?.timestampMs as unknown as string)),
        };
      }) ?? [];

    console.log(lineData, "line data");
    setData(() => lineData);
    setLoading(false);
    return lineData;
  };

  return {
    data,
    handleRefresh,
    loading,
  };
};

export default useGetMyTransactions;
