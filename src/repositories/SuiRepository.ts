// Setup: npm install alchemy-sdk
import { SuiRPC } from "lib/rpc-endpoints/sui";
import { UserChainInterface } from "./BaseRepository";

export class SuiRepository implements UserChainInterface {
  address;
  endpoint;
  constructor(_address: string, _endpoint: string) {
    this.address = _address;
    this.endpoint = _endpoint;
  }
  getNativeTokenBalance = () => "";
  getTokenBalances = async () => {
    const rpc = new SuiRPC(this.endpoint);
    const accounts = await rpc.getTokenAccountsByOwner(this.address);
    const balancesFormatted = accounts.data ?? [];
    return { data: balancesFormatted, total: balancesFormatted?.length };
  };
  getTransactionHistory = () => [];
}
