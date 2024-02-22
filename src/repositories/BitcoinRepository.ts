// Setup: npm install alchemy-sdk
import { BitcoinRPC } from "lib/rpc-endpoints/bitcoin";
import { UserChainInterface } from "./BaseRepository";

export class BitcoinRepository implements UserChainInterface {
  address;
  constructor(_address: string) {
    this.address = _address;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const rpc = new BitcoinRPC();
    const accounts = await rpc.getTokenAccountsByOwner(this.address);
    const balancesFormatted = accounts.data ?? [];
    return { data: balancesFormatted, total: balancesFormatted?.length };
  };
  getTransactionHistory = () => [];
}
