import { useQuery } from "react-query";
import useGetGlobalInfo from "./global/useGetGlobalInfo";
import { TTokenBalance } from "repositories/BaseRepository";
import { ESupportedChains } from "types";
import { EthereumRepository } from "repositories/EthereumRepository";
import { PolygonZKEVMRepository } from "repositories/PolygonZKEVMRepository";

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
    case ESupportedChains.POLYGONZKEVM_MAINNET:
      repo = new PolygonZKEVMRepository(address);
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
