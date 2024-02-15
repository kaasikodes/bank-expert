import { useQuery } from "react-query";
import useGetGlobalInfo from "./global/useGetGlobalInfo";
import { TTokenBalance } from "repositories/BaseRepository";
import { ESupportedChains } from "types";
import {
  AStarRepository,
  AptosRepository,
  EthereumRepository,
  OptimismRepository,
  PolygonRepository,
  SolanaRepository,
  SuiRepository,
} from "repositories";

export const QUERY_KEY_FOR_TOKEN_BALANCES = "token-balances";
const getData = async (props: {
  chain: ESupportedChains;
  address: string;
}): Promise<{ data: TTokenBalance[]; total: number }> => {
  const { chain, address } = props;
  let response: { data: TTokenBalance[]; total: number } = {
    data: [],
    total: 0,
  }; // Explicitly define the type as TTokenBalance[]
  let repo;
  switch (chain) {
    case ESupportedChains.ETHEREUM_MAINNET:
      repo = new EthereumRepository(address);
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.POLYGON_MAINNET:
      repo = new PolygonRepository(address);
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.ASTAR_MAINNET:
      repo = new AStarRepository(address);
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.OPTIMISM_MAINNET:
      repo = new OptimismRepository(address);
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.APTOS_MAINNET:
      repo = new AptosRepository(address);
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SUI_MAINNET:
      repo = new SuiRepository(address, "https://fullnode.mainnet.sui.io:443");
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SUI_DEVNET:
      repo = new SuiRepository(address, "https://fullnode.devnet.sui.io:443");
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SUI_TESTNET:
      repo = new SuiRepository(address, "https://fullnode.testnet.sui.io:443");
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SOLANA_MAINNET:
      repo = new SolanaRepository(address, "mainnet-beta");
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SOLANA_TESTNET:
      repo = new SolanaRepository(address, "testnet");
      response = await repo.getTokenBalances();
      break;
    case ESupportedChains.SOLANA_DEVNET:
      repo = new SolanaRepository(address, "devnet");
      response = await repo.getTokenBalances();
      break;

    default:
      break;
  }

  return response;
};

export const useGetTokenBalances = () => {
  const { selectedChain: chain, selectedWallet: wallet } = useGetGlobalInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_TOKEN_BALANCES, chain, wallet],
    () =>
      getData({
        chain,
        address: wallet?.address ?? "",
      }),
    {
      enabled: !!wallet?.address,
    }
  );

  return queryData;
};
