export { type IImageProps, type IIconProps } from "./image";
export { EThemePrimaryColor, type TThemeMode } from "./theme";

export enum ESupportedChains {
  ETHEREUM_MAINNET = "Ethereum Mainnet",
  POLYGON_MAINNET = "Polygon Mainnet",
  OPTIMISM_MAINNET = "Optimism Mainnet",
  ASTAR_MAINNET = "AStar Mainnet",
  APTOS_MAINNET = "Aptos Mainnet",
  SUI_MAINNET = "Sui Mainnet",
  SOLANA_MAINNET = "Solana Mainnet",
  SOLANA_DEVNET = "Solana Devnet",
  STARKNET_MAINET = "Starknet Mainnet",
}

export type TWallet = {
  name: string;
  address: string;
};
