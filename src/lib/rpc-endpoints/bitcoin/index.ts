import { CovalentClient } from "@covalenthq/client-sdk";
import { ENV } from "_constants/environment";
import { generateHumanReadableCryptoBalance } from "lib/utils";
import { TTokenBalance } from "repositories/BaseRepository";

export class BitcoinRPC {
  public rpc: CovalentClient;

  constructor() {
    this.rpc = new CovalentClient(ENV.BITCOIN_COVALENT_API_KEY);
  }

  getTokenAccountsByOwner = async (
    address: string
  ): Promise<{ data?: TTokenBalance[] }> => {
    const data = await this.rpc.BalanceService.getTokenBalancesForWalletAddress(
      "btc-mainnet",
      address
    );

    const balancesFormatted = data.data?.items.map((coin) => {
      const formattedBalance =
        generateHumanReadableCryptoBalance(
          coin?.balance ? BigInt(coin.balance).toString() : "0",
          coin.contract_decimals ?? undefined
        ) ?? [];

      return {
        tokenAddress: coin.contract_address,
        tokenBalance: formattedBalance,
        tokenName: coin.contract_name,
      };
    });

    return { data: balancesFormatted };
  };
}
