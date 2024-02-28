import { Network } from "alchemy-sdk";
import { AlchemyRPC } from "lib/rpc-endpoints/alchemy";
import { generateHumanReadableCryptoBalance } from "lib/utils";

export type TTokenBalance = {
  tokenName: string;
  tokenBalance: string;
  tokenAddress: string;
};

export interface UserChainInterface {
  address: string;
  getTransactionHistory: () => { date: string; details: string }[];
  getTokenBalances: () => Promise<{ data: TTokenBalance[]; total: number }>;
  getNativeTokenBalance: () => string;
}

export abstract class AlchemySupportedChainRepo implements UserChainInterface {
  address;
  network;
  constructor(_address: string, _network: Network) {
    this.address = _address;
    this.network = _network;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const alchemy = new AlchemyRPC(this.network);
    const balances = await alchemy.rpc?.core.getTokenBalances(this.address);

    let balancesFormatted = balances.tokenBalances.map(
      (balance): TTokenBalance => {
        return {
          tokenName: balance.contractAddress,
          tokenBalance: balance.tokenBalance ?? "",
          tokenAddress: balance.contractAddress,
        };
      }
    );
    // TODO: Implement pagination for all requests, as the max amount of requests for now permitted by alchemy is 5
    balancesFormatted = await Promise.all(
      balancesFormatted
        .slice(0, 5)
        .map(async (_balance): Promise<TTokenBalance> => {
          const metaData = await alchemy.rpc?.core.getTokenMetadata(
            _balance.tokenAddress
          );
          const formattedBalance = generateHumanReadableCryptoBalance(
            _balance.tokenBalance,
            metaData?.decimals ?? undefined
          );
          return {
            tokenAddress: _balance.tokenAddress,
            tokenBalance: formattedBalance,
            tokenName: metaData.name ?? "",
          };
        })
    );
    return { data: balancesFormatted, total: balancesFormatted.length };
  };
  getTransactionHistory = () => [];
}
