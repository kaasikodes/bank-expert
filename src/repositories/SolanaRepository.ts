// Setup: npm install alchemy-sdk
import { TTokenBalance, UserChainInterface } from "./BaseRepository";
import { SolanaRPC } from "lib/rpc-endpoints/solana";

export class SolanaRepository implements UserChainInterface {
  address;
  endpoint;
  constructor(_address: string, _endpoint: string) {
    this.address = _address;
    this.endpoint = _endpoint;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const rpc = new SolanaRPC(this.endpoint);
    const accounts = await rpc.getTokenAccountsByOwner(this.address);
    console.log("solana", accounts);
    const balancesFormatted =
      accounts.data?.result.value.map((acc): TTokenBalance => {
        return {
          tokenName: acc.account.data.program,
          tokenBalance: acc.account.data.parsed.info.tokenAmount.uiAmountString,
          tokenAddress: acc.pubkey,
        };
      }) ?? [];
    return { data: balancesFormatted, total: balancesFormatted?.length };
  };
  getTransactionHistory = () => [];
}
