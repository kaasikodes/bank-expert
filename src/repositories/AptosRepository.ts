import { Network } from "@aptos-labs/ts-sdk";
import { TTokenBalance, UserChainInterface } from "./BaseRepository";
import { AptosRPC } from "lib/rpc-endpoints/aptos";

export class AptosRepository implements UserChainInterface {
  address;
  network: Network;
  constructor(_address: string) {
    this.address = _address;
    this.network = Network.MAINNET;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const aptos = new AptosRPC(this.network);
    const tokens = await aptos.rpc.getAccountOwnedTokens({
      accountAddress: this.address,
    });

    const balancesFormatted = tokens.map((token): TTokenBalance => {
      return {
        tokenName: token.current_token_data?.token_name ?? "",
        tokenBalance: token.amount,
        tokenAddress: token.owner_address,
      };
    });

    return { data: balancesFormatted, total: balancesFormatted.length };
  };
  getTransactionHistory = () => [];
}
