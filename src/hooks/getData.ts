import { TTokenBalance } from "repositories/BaseRepository";
import { ESupportedChains } from "types";
import {
  AStarRepository,
  EthereumRepository,
  OptimismRepository,
  PolygonRepository,
} from "repositories";

export const getData = async (props: {
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

    default:
      break;
  }

  return response;
};
