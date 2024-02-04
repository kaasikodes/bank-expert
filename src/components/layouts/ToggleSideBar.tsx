import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleSideBar: React.FC<IProps> = ({
  showSideBar,
  setShowSideBar,
  ...props
}) => {
  return (
    <button onClick={() => setShowSideBar((val) => !val)} {...props}>
      {showSideBar === true ? (
        <AiOutlineClose size={18} />
      ) : (
        <AiOutlineMenu size={18} />
      )}
    </button>
  );
};

export default ToggleSideBar;
