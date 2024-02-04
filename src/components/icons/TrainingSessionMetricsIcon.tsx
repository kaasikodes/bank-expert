import React from "react";
import { IIconProps } from "types";

const TrainingSessionMetricsIcon: React.FC<IIconProps> = (props) => {
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
        d="M21.5 12V16.5H3.5V4.5H12.5V3H3.5C3.10218 3 2.72064 3.15804 2.43934 3.43934C2.15804 3.72064 2 4.10218 2 4.5V16.5C2 16.8978 2.15804 17.2794 2.43934 17.5607C2.72064 17.842 3.10218 18 3.5 18H9.5V21H6.5V22.5H18.5V21H15.5V18H21.5C21.8978 18 22.2794 17.842 22.5607 17.5607C22.842 17.2794 23 16.8978 23 16.5V12H21.5ZM14 21H11V18H14V21Z"
        className="fill-accent"
      />
      <path
        d="M16.25 11.25L12.5 7.53L13.6925 6.3525L16.25 8.8875L21.8075 3.375L23 4.56L16.25 11.25Z"
        className="fill-accent"
      />
    </svg>
  );
};

export default TrainingSessionMetricsIcon;
