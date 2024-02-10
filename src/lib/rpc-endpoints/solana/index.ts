import axios from "axios";

export class SolanaRPC {
  endpoint: string;
  constructor(_endpoint: string) {
    this.endpoint = _endpoint;
  }

  getTokenAccountsByOwner = async (
    address: string
  ): Promise<{ data?: TTokenAccountsByOwner }> => {
    const url = this.endpoint;

    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const requestData = {
      //   jsonrpc: "2.0",
      //   id: 1,
      method: "getTokenAccountsByOwner",
      params: [
        address,
        {
          //   mint: "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
        },
      ],
    };

    const res = await axios.post(url, requestData, config);
    const item: TTokenAccountsByOwner | null = res.data.data;
    const data = item === null ? undefined : item;

    return { data };
  };
}

type TTokenAccountsByOwner = {
  jsonrpc: string;
  result: Result;
  id: number;
};

interface Result {
  context: Context;
  value: Value[];
}

interface Value {
  account: Account;
  pubkey: string;
}

interface Account {
  data: Data;
  executable: boolean;
  lamports: number;
  owner: string;
  rentEpoch: number;
  space: number;
}

interface Data {
  program: string;
  parsed: Parsed;
  space: number;
}

interface Parsed {
  accountType: string;
  info: Info;
  type: string;
}

interface Info {
  tokenAmount: TokenAmount;
  delegate: string;
  delegatedAmount: TokenAmount;
  state: string;
  isNative: boolean;
  mint: string;
  owner: string;
}

interface TokenAmount {
  amount: string;
  decimals: number;
  uiAmount: number;
  uiAmountString: string;
}

interface Context {
  slot: number;
}
