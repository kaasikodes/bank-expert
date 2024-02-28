// Setup: npm install alchemy-sdk
import { Network } from "alchemy-sdk";
import { AlchemySupportedChainRepo } from "./BaseRepository";

export class EthereumRepository extends AlchemySupportedChainRepo {
  constructor(_address: string) {
    super(_address, Network.ETH_MAINNET);
  }
}
