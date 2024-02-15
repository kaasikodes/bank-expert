// Setup: npm install alchemy-sdk
import { UserChainInterface } from "./BaseRepository";
import { SolanaRPC, TSolanaNetwork } from "lib/rpc-endpoints/solana";

export class SolanaRepository implements UserChainInterface {
  address;
  network;
  constructor(_address: string, _network: TSolanaNetwork) {
    this.address = _address;
    this.network = _network;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const rpc = new SolanaRPC(this.network);
    const accounts = await rpc.getTokenAccountsByOwner(this.address);
    const balancesFormatted = accounts.data ?? [];
    return { data: balancesFormatted, total: balancesFormatted?.length };
  };
  getTransactionHistory = () => [];
}
