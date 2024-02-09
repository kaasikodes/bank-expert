// Setup: npm install alchemy-sdk
import { Network } from "alchemy-sdk";
import { TTokenBalance, UserChainInterface } from "./BaseRepository";
import { AlchemyRPC } from "lib/rpc-endpoints/alchemy";

export class SolanaRepository implements UserChainInterface {
  address;
  constructor(_address: string) {
    this.address = _address;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const alchemy = new AlchemyRPC(Network.ETH_MAINNET);
    const balances = await alchemy.rpc?.core.getTokenBalances(this.address);

    const balancesFormatted = balances.tokenBalances.map(
      (balance): TTokenBalance => {
        return {
          tokenName: balance.contractAddress,
          tokenBalance: balance.tokenBalance ?? "",
          tokenAddress: balance.contractAddress,
        };
      }
    );
    return { data: balancesFormatted, total: balancesFormatted.length };
  };
  getTransactionHistory = () => [];
}
