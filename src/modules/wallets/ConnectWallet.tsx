import BrokenPiggyBankIcon from "components/icons/BrokenPiggyBankIcon";

const ConnectWallet = () => {
  return (
    <div className="text-accent flex flex-col items-center justify-start">
      <BrokenPiggyBankIcon className="relative -top-28" />

      <h1 className="px-3 text-lg relative -top-44 py-2 rounded-md border border-primary text-primary hover:text-accent hover:border-accent  font-medium bg-transparent transition ease-in-out duration-500  tracking-wider">
        Please Connect Wallet
      </h1>
    </div>
  );
};

export default ConnectWallet;
