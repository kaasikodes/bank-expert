export type TRouteDataCategory =
  | "doesnt-require-authentication"
  | "doesnt-require-wallet-connection";

export type TRouteData = {
  path: string;
  element: JSX.Element;
  category?: TRouteDataCategory[];
  title?: string;
  hidden?: boolean;
};
