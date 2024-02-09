export type TTokenBalance = {
  tokenName: string;
  tokenBalance: string;
  tokenAddress: string;
};

export interface UserChainInterface {
  address: string;
  getTransactionHistory: () => { date: string; details: string }[];
  getTokenBalances: () => Promise<{data:TTokenBalance[], total: number}>;
  getNativeTokenBalance: () => string;
}
