import React from "react";
import { IIconProps } from "types";

const SettingIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-primary"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9997 19.6362C18.1859 19.6362 19.9582 18.0081 19.9582 15.9998C19.9582 13.9915 18.1859 12.3635 15.9997 12.3635C13.8134 12.3635 12.0411 13.9915 12.0411 15.9998C12.0411 18.0081 13.8134 19.6362 15.9997 19.6362ZM22.3333 15.9998C22.3333 19.2131 19.4977 21.818 15.9997 21.818C12.5017 21.818 9.66602 19.2131 9.66602 15.9998C9.66602 12.7865 12.5017 10.1816 15.9997 10.1816C19.4977 10.1816 22.3333 12.7865 22.3333 15.9998Z"
      />
      <path
        className="fill-primary"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2657 2.67911L13.652 4.37025C13.1346 5.79622 11.9992 6.80635 10.8097 7.41473C10.7083 7.4666 10.6079 7.51996 10.5085 7.57477C9.33891 8.21976 7.81675 8.61917 6.21177 8.31746L4.30886 7.95975C3.975 7.897 3.63489 8.03753 3.4645 8.30863L2.48123 9.87309C2.31084 10.1442 2.34842 10.485 2.57451 10.7193L3.86504 12.0562C4.94817 13.1782 5.33604 14.5844 5.31443 15.8374C5.31256 15.9457 5.31256 16.0542 5.31442 16.1626C5.33603 17.4155 4.94816 18.8217 3.86503 19.9438L2.57451 21.2806C2.34842 21.5149 2.31084 21.8557 2.48123 22.1268L3.4645 23.6913C3.63489 23.9624 3.975 24.1029 4.30886 24.0401L6.21164 23.6825C7.81664 23.3808 9.33882 23.7802 10.5084 24.4252C10.6079 24.48 10.7083 24.5334 10.8097 24.5853C11.9992 25.1936 13.1346 26.2038 13.652 27.6298L14.2657 29.3209C14.3735 29.6179 14.676 29.8182 15.0168 29.8182H16.9833C17.3241 29.8182 17.6266 29.6179 17.7344 29.3209L18.348 27.6298C18.8655 26.2038 20.0009 25.1936 21.1903 24.5853C21.2918 24.5334 21.3922 24.48 21.4916 24.4252C22.6612 23.7802 24.1834 23.3808 25.7884 23.6825L27.6911 24.0401C28.025 24.1029 28.3651 23.9624 28.5355 23.6913L29.5188 22.1268C29.6892 21.8557 29.6516 21.5149 29.4255 21.2806L28.135 19.9438C27.0519 18.8218 26.664 17.4156 26.6857 16.1626C26.6875 16.0542 26.6875 15.9457 26.6857 15.8373C26.664 14.5843 27.0519 13.1781 28.135 12.0561L29.4255 10.7193C29.6516 10.485 29.6892 10.1442 29.5188 9.8731L28.5355 8.30863C28.3651 8.03753 28.025 7.897 27.6911 7.95976L25.7883 8.31746C24.1833 8.61916 22.6612 8.21975 21.4916 7.57476C21.3922 7.51995 21.2918 7.4666 21.1903 7.41473C20.0009 6.80635 18.8655 5.79622 18.348 4.37025L17.7344 2.67911C17.6266 2.38213 17.3241 2.18182 16.9833 2.18182H15.0168C14.676 2.18182 14.3735 2.38213 14.2657 2.67911ZM11.3988 3.6803C11.1102 4.47554 10.4516 5.10069 9.65429 5.50849C9.53029 5.57192 9.40753 5.63715 9.28605 5.70414C8.50274 6.13611 7.583 6.3482 6.68793 6.17994L4.78503 5.82223C3.4496 5.5712 2.08913 6.13331 1.40758 7.21772L0.424312 8.78219C-0.257237 9.86659 -0.10694 11.23 0.797436 12.1668L2.08796 13.5037C2.69269 14.1302 2.95404 14.9656 2.9396 15.8028C2.93734 15.9342 2.93733 16.0657 2.9396 16.1971C2.95404 17.0343 2.69268 17.8697 2.08796 18.4962L0.797438 19.8331C-0.106938 20.7699 -0.257237 22.1333 0.424312 23.2177L1.40758 24.7822C2.08913 25.8666 3.4496 26.4287 4.78503 26.1777L6.68781 25.82C7.58289 25.6517 8.50263 25.8638 9.28594 26.2958C9.40746 26.3628 9.53025 26.4281 9.65429 26.4915C10.4516 26.8993 11.1102 27.5245 11.3988 28.3197L12.0125 30.0108C12.4435 31.1988 13.6537 32 15.0168 32H16.9833C18.3464 32 19.5566 31.1988 19.9876 30.0108L20.6013 28.3197C20.8899 27.5245 21.5485 26.8993 22.3458 26.4915C22.4698 26.4281 22.5926 26.3628 22.7141 26.2958C23.4974 25.8638 24.4172 25.6517 25.3123 25.82L27.215 26.1777C28.5504 26.4287 29.9109 25.8666 30.5924 24.7822L31.5757 23.2177C32.2572 22.1333 32.1069 20.7699 31.2026 19.8331L29.9121 18.4963C29.3074 17.8698 29.046 17.0344 29.0605 16.1972C29.0627 16.0657 29.0627 15.9342 29.0605 15.8027C29.046 14.9655 29.3074 14.1301 29.9121 13.5036L31.2026 12.1668C32.1069 11.23 32.2572 9.86659 31.5757 8.78219L30.5924 7.21772C29.9109 6.13332 28.5504 5.5712 27.215 5.82223L25.3121 6.17993C24.4171 6.34819 23.4973 6.1361 22.714 5.70413C22.5925 5.63714 22.4698 5.57192 22.3458 5.50849C21.5485 5.10069 20.8899 4.47554 20.6013 3.6803L19.9876 1.98915C19.5566 0.80125 18.3464 0 16.9833 0H15.0168C13.6537 0 12.4435 0.801251 12.0125 1.98916L11.3988 3.6803Z"
      />
    </svg>
  );
};

export default SettingIcon;
