import axios from "axios";
import { generateHumanReadableCryptoBalance } from "lib/utils";
import { TTokenBalance } from "repositories/BaseRepository";

export class SuiRPC {
  endpoint: string;
  constructor(_endpoint: string) {
    this.endpoint = _endpoint;
  }

  getTokenAccountsByOwner = async (
    address: string
  ): Promise<{ data?: TTokenBalance[] }> => {
    const url = this.endpoint;

    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const requestData = {
      jsonrpc: "2.0",
      id: 1,
      method: "suix_getAllBalances",
      params: [address],
    };

    const res = await axios.post(url, requestData, config);
    const item: TTokenAccountsByOwner | null = res.data;
    const data = item === null ? undefined : item;

    const balancesFormatted = await Promise.all(
      data?.result?.map(async (coin): Promise<TTokenBalance> => {
        const metaDataRes = await axios.post(
          url,
          {
            jsonrpc: "2.0",
            id: 1,
            method: "suix_getCoinMetadata",
            params: [coin.coinType],
          },
          config
        );
        const metaData: TMetaDataInfo | null = metaDataRes.data;
        const formattedBalance = generateHumanReadableCryptoBalance(
          coin.totalBalance,
          metaData?.result.decimals ?? undefined
        );

        return {
          tokenAddress: coin.coinType,
          tokenBalance: formattedBalance,
          tokenName: metaData?.result.name ?? "",
        };
      }) ?? []
    );

    return { data: balancesFormatted };
  };
}

type TTokenAccountsByOwner = {
  jsonrpc: string;
  result: Result[];
  id: number;
};

interface Result {
  coinType: string;
  coinObjectCount: number;
  totalBalance: string;
  lockedBalance: LockedBalance;
}

interface LockedBalance {}

type TMetaDataInfo = {
  jsonrpc: string;
  result: Result;
  id: number;
};

interface Result {
  decimals: number;
  name: string;
  symbol: string;
  description: string;
  iconUrl?: string | null;
  id: string;
}
