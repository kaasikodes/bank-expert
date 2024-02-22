import { Avatar, Dropdown } from "antd";
import { MenuItemType, MenuDividerType } from "antd/es/menu/hooks/useItems";
import AddWallet from "modules/wallets/AddWallet";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

type TAction = "add-wallet";
const UserProfileDropdown = () => {
  const [action, setAction] = useState<TAction>();
  const handleAction = (action: TAction) => {
    setAction(action);
  };
  const handleClose = () => {
    setAction(undefined);
  };
  return (
    <>
      <AddWallet open={action === "add-wallet"} handleClose={handleClose} />
      <Dropdown
        trigger={["click"]}
        menu={{
          className: "w-48",
          items: [
            {
              key: "-1",
              label: "Add Wallet",
              icon: <IoAddOutline />,
              onClick: () => handleAction("add-wallet"),
              hidden: false,
            },

            {
              type: "divider",
              hidden: false,
            },
          ]
            .filter((item) => item.hidden === false)
            .map((item: unknown) => {
              return item as MenuItemType | MenuDividerType;
            }),
        }}
      >
        <Avatar className="cursor-pointer md:h-8 md:w-8 h-6 w-6 " />
      </Dropdown>
    </>
  );
};

export default UserProfileDropdown;
