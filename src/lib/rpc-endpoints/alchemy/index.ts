import { Alchemy, Network } from "alchemy-sdk";

export class AlchemyRPC {
  private apiKey: string = "1iR2gmd_L28E4J4PLc5EL2FjRwnVocnO";
  public rpc: Alchemy;
  constructor(network: Network) {
    this.rpc = new Alchemy({
      apiKey: this.apiKey,
      network,
    });
  }
}
