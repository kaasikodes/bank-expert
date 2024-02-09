// Setup: npm install alchemy-sdk
import { Network } from "alchemy-sdk";
import { TTokenBalance, UserChainInterface } from "./BaseRepository";
import { AlchemyRPC } from "lib/rpc-endpoints/alchemy";
import { generateHumanReadableCryptoBalance } from "lib/utils";

export class EthereumRepository implements UserChainInterface {
  address;
  constructor(_address: string) {
    this.address = _address;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const alchemy = new AlchemyRPC(Network.ETH_MAINNET);
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
