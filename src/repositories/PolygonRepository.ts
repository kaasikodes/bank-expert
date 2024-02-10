// Setup: npm install alchemy-sdk
import { Network } from "alchemy-sdk";
import { AlchemySupportedChainRepo } from "./BaseRepository";

export class PolygonRepository extends AlchemySupportedChainRepo {
  constructor(_address: string) {
    super(_address, Network.MATIC_MAINNET);
  }
}
