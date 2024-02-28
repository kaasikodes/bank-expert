
import { Network } from "alchemy-sdk";
import { AlchemySupportedChainRepo } from "./BaseRepository";

export class AStarRepository extends AlchemySupportedChainRepo {
  constructor(_address: string) {
    super(_address, Network.ASTAR_MAINNET);
  }
}
