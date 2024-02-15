import { Select } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import { ESupportedChains } from "types";

const supportedChains: ESupportedChains[] = [
  ESupportedChains.ETHEREUM_MAINNET,
  ESupportedChains.POLYGON_MAINNET,
  ESupportedChains.ASTAR_MAINNET,
  ESupportedChains.OPTIMISM_MAINNET,
  ESupportedChains.APTOS_MAINNET,
  ESupportedChains.SUI_MAINNET,
  ESupportedChains.SUI_DEVNET,
  ESupportedChains.SUI_TESTNET,
  ESupportedChains.SOLANA_MAINNET,
  ESupportedChains.SOLANA_DEVNET,
  ESupportedChains.STARKNET_MAINET,
];
const ChainSelector = () => {
  const { selectedChain, handleChainSelection } = useGetGlobalInfo();
  return (
    <Select
      onSelect={(val: ESupportedChains) => {
        console.log("val", val);
        handleChainSelection(val);
      }}
      placeholder="Select Network"
      className="min-w-40"
      value={selectedChain}
      options={supportedChains.map((item) => ({
        value: item,
        label: <span className="uppercase">{item}</span>,
      }))}
    />
  );
};

export default ChainSelector;
