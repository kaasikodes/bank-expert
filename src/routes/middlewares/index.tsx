import { WalletConnectedMiddleware } from "components/middlewares";
import { TRouteDataCategory } from "routes/types";

export const MiddlewareOrganizer: React.FC<{
  children: React.ReactNode;
  categories?: TRouteDataCategory[];
  disabled?: boolean;
}> = ({ children, categories, disabled = false }) => {
  if (disabled) {
    return <>{children}</>;
  }
  if (
    categories === undefined ||
    !categories.includes("doesnt-require-wallet-connection")
  ) {
    return (
      <WalletConnectedMiddleware>
        <>{children}</>
      </WalletConnectedMiddleware>
    );
  }
  return <>{children}</>;
};
