import React from "react";
import { IIconProps } from "types";

const ReportsIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 7H13.5V17H11.5V7ZM15.5 11H17.5V17H15.5V11ZM7.5 13H9.5V17H7.5V13ZM15.5 4H5.5V20H19.5V8H15.5V4ZM3.5 2.992C3.5 2.444 3.947 2 4.499 2H16.5L21.5 7V20.993C21.5009 21.1243 21.476 21.2545 21.4266 21.3762C21.3772 21.4979 21.3043 21.6087 21.2121 21.7022C21.1199 21.7957 21.0101 21.8701 20.8892 21.9212C20.7682 21.9723 20.6383 21.9991 20.507 22H4.493C4.23038 21.9982 3.97902 21.8931 3.79322 21.7075C3.60742 21.5219 3.50209 21.2706 3.5 21.008V2.992Z"
        className="fill-accent"
      />
    </svg>
  );
};

export default ReportsIcon;
