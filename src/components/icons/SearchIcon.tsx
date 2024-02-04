import React from "react";
import { IIconProps } from "types";

const SearchIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0839 15.5091C17.429 13.9202 18.24 11.8648 18.24 9.62C18.24 4.58316 14.1568 0.5 9.12 0.5C4.08316 0.5 0 4.58316 0 9.62C0 14.6568 4.08316 18.74 9.12 18.74C11.3648 18.74 13.4202 17.929 15.0091 16.5839L17.7026 19.2774C17.9994 19.5742 18.4806 19.5742 18.7774 19.2774C19.0742 18.9806 19.0742 18.4994 18.7774 18.2026L16.0839 15.5091ZM16.72 9.62C16.72 13.8174 13.3174 17.22 9.12 17.22C4.92264 17.22 1.52 13.8174 1.52 9.62C1.52 5.42264 4.92264 2.02 9.12 2.02C13.3174 2.02 16.72 5.42264 16.72 9.62Z"
        className="fill-accent"
      />
    </svg>
  );
};

export default SearchIcon;
