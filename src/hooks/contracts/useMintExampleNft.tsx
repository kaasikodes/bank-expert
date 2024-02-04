import { useCallback } from "react";
import { ethos, TransactionBlock } from "ethos-connect";

export const useMintExampleNft = () => {
  const contractAddress =
    "0x1cbfdf7de5004f887705fa53bb345d4372e5004bd8b04a6f8868f5e1ca1af9c7";
  const { wallet } = ethos.useWallet();

  const mint = useCallback(async () => {
    console.log("hello");
    if (!wallet) return;

    try {
      const mintTransactionBlock = new TransactionBlock();
      const nft = mintTransactionBlock.moveCall({
        target: `${contractAddress}::ethos_example_nft::mint`,
        arguments: [
          mintTransactionBlock.pure("Ethos Example NFT"),
          mintTransactionBlock.pure("A sample NFT from Ethos Wallet."),
          mintTransactionBlock.pure(
            "https://ethoswallet.xyz/assets/images/ethos-email-logo.png"
          ),
        ],
      });
      mintTransactionBlock.transferObjects(
        [nft],
        mintTransactionBlock.pure(
          "0xb0e24ba1afc3d2f5e348b569e72e94cf20ec2cecf3cd27edea1c3ad628e5374c",
          "address"
        )
      );

      const response = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: mintTransactionBlock,
        options: {
          showInput: true,
          showEffects: true,
          showEvents: true,
          showBalanceChanges: true,
          showObjectChanges: true,
        },
      });

      console.log("Transaction Response", response);
    } catch (error) {
      console.log(error);
    }
  }, [wallet]);

  return {
    mint,
  };
};
