import { Select } from "antd";
import useGetGlobalInfo from "hooks/global/useGetGlobalInfo";
import { ESupportedChains } from "types";

const supportedChains: ESupportedChains[] = [
  ESupportedChains.ETHEREUM_MAINNET,
  ESupportedChains.POLYGONZKEVM_MAINNET,
  ESupportedChains.APTOS_MAINNET,
  ESupportedChains.SUI_MAINNET,
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
