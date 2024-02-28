import { Alchemy, Network } from "alchemy-sdk";
import { ENV } from "_constants/environment";

export class AlchemyRPC {
  private apiKey: string = ENV.ALCHEMY_API_KEY;
  public rpc: Alchemy;
  constructor(network: Network) {
    this.rpc = new Alchemy({
      apiKey: this.apiKey,
      network,
    });
  }
}
