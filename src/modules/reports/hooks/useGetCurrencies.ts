import { useState, useEffect } from "react";

export type TCurrency = {
  id: number;
  rank: number;
  slug: string;
  name: string;
  symbol: string;
  category: string;
  type: string;
  volume24hBase: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  values: Values;
  lastUpdated: string;
  //   tokens: any[];
};

interface Values {
  USD: USD;
}

interface USD {
  price: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  marketCap: number;
  percentChange24h: number;
  percentChange7d: number;
  percentChange30d: number;
  percentChange3m: number;
  percentChange6m: number;
}
const useGetCurrencies = () => {
  const [data, setData] = useState<TCurrency[]>([]);
  const [refresh, setRefesh] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    asyncClient();
  }, [refresh]);
  const handleRefresh = () => {
    setRefesh((prev) => !prev);
  };

  const asyncClient = async () => {
    fetch(
      "https://api.cryptorank.io/v1/currencies?api_key=8a93d532f46b95bd44226b4237b28c04db91cfedac385721efd3692a500e"
    )
      .then((res) => res.json())
      .then((json: unknown) => {
        console.log(json, "json");
        setData((json as Record<string, unknown>)?.data as TCurrency[]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
        setLoading(false);
      });
  };
  return {
    data,
    loading,
    handleRefresh,
  };
};

export default useGetCurrencies;
