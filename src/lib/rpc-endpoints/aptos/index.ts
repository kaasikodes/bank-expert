import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export class AptosRPC {
  public rpc: Aptos;

  constructor(network: Network) {
    const aptosConfig = new AptosConfig({ network });
    this.rpc = new Aptos(aptosConfig);
  }
}
