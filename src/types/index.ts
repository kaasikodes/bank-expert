export { type IImageProps, type IIconProps } from "./image";
export { EThemePrimaryColor, type TThemeMode } from "./theme";
export interface IDivProps extends React.HTMLAttributes<HTMLDivElement> {}
export enum ESupportedChains {
  ETHEREUM_MAINNET = "Ethereum Mainnet",
  BITCOIN_MAINNET = "Bitcoin",
  POLYGON_MAINNET = "Polygon Mainnet",
  OPTIMISM_MAINNET = "Optimism Mainnet",
  ASTAR_MAINNET = "AStar Mainnet",
  APTOS_MAINNET = "Aptos Mainnet",
  SUI_MAINNET = "Sui Mainnet",
  SUI_DEVNET = "Sui Devnet",
  SUI_TESTNET = "Sui Testnet",
  SOLANA_MAINNET = "Solana Mainnet",
  SOLANA_DEVNET = "Solana Devnet",
  SOLANA_TESTNET = "Solana Testnet",
  STARKNET_MAINET = "Starknet Mainnet",
}

export type TWallet = {
  name: string;
  address: string;
};
