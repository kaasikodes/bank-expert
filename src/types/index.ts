export { type IImageProps, type IIconProps } from "./image";
export { EThemePrimaryColor, type TThemeMode } from "./theme";

export enum ESupportedChains {
  ETHEREUM_MAINNET = "Ethereum Mainnet",
  SOLANA_MAINNET = "Solana Mainnet",
  POLYGONZKEVM_MAINNET = "PolygonZKEVM Mainnet",
  APTOS_MAINNET = "Aptos Mainnet",
  SUI_MAINNET = "Sui Mainnet",
  STARKNET_MAINET = "Starknet Mainnet",
}

export type TWallet = {
  name: string;
  address: string;
};
