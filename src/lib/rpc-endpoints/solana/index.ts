import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { TTokenBalance } from "repositories/BaseRepository";
import { generateHumanReadableCryptoBalance } from "lib/utils";

export type TSolanaNetwork = "devnet" | "mainnet-beta" | "testnet";
export class SolanaRPC {
  network: TSolanaNetwork;
  constructor(_network: TSolanaNetwork) {
    this.network = _network;
  }

  getTokenAccountsByOwner = async (
    address: string
  ): Promise<{ data?: TTokenBalance[] }> => {
    // connection
    const connection = new Connection(clusterApiUrl(this.network), "confirmed");

    const owner = new PublicKey(address);
    const response = await connection.getParsedTokenAccountsByOwner(owner, {
      programId: TOKEN_PROGRAM_ID,
    });
    const balancesFormatted = await Promise.all(
      response.value.map(async (accountInfo): Promise<TTokenBalance> => {
        const formattedBalance = generateHumanReadableCryptoBalance(
          accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"],
          accountInfo.account.data["parsed"]["info"]["tokenAmount"][
            "decimals"
          ] ?? undefined
        );

        return {
          tokenAddress: accountInfo.account.data["parsed"]["info"]["mint"],
          tokenBalance: formattedBalance,
          tokenName: "N/A ...",
        };
      })
    );
    return { data: balancesFormatted };
  };
}
