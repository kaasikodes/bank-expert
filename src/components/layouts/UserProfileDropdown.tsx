import { Avatar, Dropdown, Typography } from "antd";
import { MenuItemType, MenuDividerType } from "antd/es/menu/hooks/useItems";
import { EthosConnectStatus, SignInButton, ethos } from "ethos-connect";

const UserProfileDropdown = () => {
  const { wallet, status } = ethos.useWallet();

  const logout = () => {
    wallet?.disconnect();
  };
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        className: "w-48",
        items: [
          {
            key: 0,
            label: "Profile",
            hidden: status !== EthosConnectStatus.Connected,
            disabled: true,
          },
          {
            key: 1,
            hidden: status !== EthosConnectStatus.Connected,
            label: (
              <Typography.Text
                copyable={{
                  text: wallet?.address,
                }}
              >
                {`${ethos.truncateMiddle(wallet?.address ?? "", 8)}`}
              </Typography.Text>
            ),
          },
          { type: "divider", hidden: status !== EthosConnectStatus.Connected },
          {
            key: 2,
            label: "Logout",
            onClick: logout,
            hidden: status !== EthosConnectStatus.Connected,
          },
          {
            key: 3,
            label: <SignInButton>Connect Wallet</SignInButton>,
            hidden: status === EthosConnectStatus.Connected,
          },
        ]
          .filter((item) => item.hidden === false)
          .map((item: unknown) => {
            return item as MenuItemType | MenuDividerType;
          }),
      }}
    >
      <Avatar
        className="cursor-pointer md:h-8 md:w-8 h-6 w-6 "
        src={wallet?.icon}
      />
    </Dropdown>
  );
};

export default UserProfileDropdown;
